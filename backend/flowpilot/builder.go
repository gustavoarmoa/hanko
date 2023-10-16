package flowpilot

import (
	"errors"
	"fmt"
	"time"
)

type FlowBuilder interface {
	TTL(ttl time.Duration) FlowBuilder
	State(state StateName, actions ...Action) FlowBuilder
	FixedStates(initialState, errorState, finalState StateName) FlowBuilder
	Debug(enabled bool) FlowBuilder
	SubFlows(subFlows ...SubFlow) FlowBuilder
	Build() (Flow, error)
	MustBuild() Flow
}

type SubFlowBuilder interface {
	State(state StateName, actions ...Action) SubFlowBuilder
	SubFlows(subFlows ...SubFlow) SubFlowBuilder
	Build() (SubFlow, error)
	MustBuild() SubFlow
}

// defaultFlowBuilderBase is the base flow builder struct.
type defaultFlowBuilderBase struct {
	flow         StateTransitions
	subFlows     SubFlows
	initialState StateName
	stateDetails stateDetails
}

// defaultFlowBuilder is a builder struct for creating a new Flow.
type defaultFlowBuilder struct {
	path       string
	ttl        time.Duration
	errorState StateName
	endState   StateName
	debug      bool

	defaultFlowBuilderBase
}

// newFlowBuilderBase creates a new defaultFlowBuilderBase instance.
func newFlowBuilderBase() defaultFlowBuilderBase {
	return defaultFlowBuilderBase{flow: make(StateTransitions), subFlows: make(SubFlows, 0), stateDetails: make(stateDetails)}
}

// NewFlow creates a new defaultFlowBuilder that builds a new flow available under the specified path.
func NewFlow(path string) FlowBuilder {
	fbBase := newFlowBuilderBase()

	return &defaultFlowBuilder{path: path, defaultFlowBuilderBase: fbBase}
}

// TTL sets the time-to-live (TTL) for the flow.
func (fb *defaultFlowBuilder) TTL(ttl time.Duration) FlowBuilder {
	fb.ttl = ttl
	return fb
}

func (fb *defaultFlowBuilderBase) addState(state StateName, actions ...Action) {
	var transitions Transitions

	for _, action := range actions {
		transitions = append(transitions, Transition{Action: action})
	}

	fb.flow[state] = transitions
}

func (fb *defaultFlowBuilderBase) addSubFlows(subFlows ...SubFlow) {
	fb.subFlows = append(fb.subFlows, subFlows...)
}

func (fb *defaultFlowBuilderBase) addDefaultStates(states ...StateName) {
	for _, state := range states {
		if _, ok := fb.flow[state]; !ok {
			fb.addState(state)
		}
	}
}

// State adds a new  transition to the flow.
func (fb *defaultFlowBuilder) State(state StateName, actions ...Action) FlowBuilder {
	fb.addState(state, actions...)
	return fb
}

// FixedStates sets the initial and final states of the flow.
func (fb *defaultFlowBuilder) FixedStates(initialState, errorState, finalState StateName) FlowBuilder {
	fb.initialState = initialState
	fb.errorState = errorState
	fb.endState = finalState
	return fb
}

func (fb *defaultFlowBuilder) SubFlows(subFlows ...SubFlow) FlowBuilder {
	fb.addSubFlows(subFlows...)
	return fb
}

// Debug enables the debug mode, which causes the flow response to contain the actual error.
func (fb *defaultFlowBuilder) Debug(enabled bool) FlowBuilder {
	fb.debug = enabled
	return fb
}

func (fb *defaultFlowBuilder) scanStateActions(flow StateTransitions, subFlows SubFlows) error {
	for state, transitions := range flow {
		if _, ok := fb.stateDetails[state]; ok {
			return fmt.Errorf("flow state '%s' is not unique", state)
		}

		actions := transitions.getActions()

		fb.stateDetails[state] = stateDetail{
			flow:     flow,
			subFlows: subFlows,
			actions:  actions,
		}
	}

	for _, sf := range subFlows {
		if err := fb.scanStateActions(sf.getFlow(), sf.getSubFlows()); err != nil {
			return err
		}
	}

	return nil
}

// validate performs validation checks on the flow configuration.
func (fb *defaultFlowBuilder) validate() error {
	// Validate fixed states and their presence in the flow.
	if len(fb.initialState) == 0 {
		return errors.New("fixed state 'initialState' is not set")
	}
	if len(fb.errorState) == 0 {
		return errors.New("fixed state 'errorState' is not set")
	}
	if len(fb.endState) == 0 {
		return errors.New("fixed state 'endState' is not set")
	}
	if !fb.flow.stateExists(fb.initialState) {
		return errors.New("fixed state 'initialState' does not belong to the flow")
	}
	if !fb.flow.stateExists(fb.errorState) {
		return errors.New("fixed state 'errorState' does not belong to the flow")
	}
	if !fb.flow.stateExists(fb.endState) {
		return errors.New("fixed state 'endState' does not belong to the flow")
	}
	if transitions, ok := fb.flow[fb.endState]; ok && len(transitions.getActions()) > 0 {
		return fmt.Errorf("the specified endState '%s' is not allowed to have transitions", fb.endState)
	}

	return nil
}

// Build constructs and returns the Flow object.
func (fb *defaultFlowBuilder) Build() (Flow, error) {
	fb.addDefaultStates(fb.initialState, fb.errorState, fb.endState)

	if err := fb.scanStateActions(fb.flow, fb.subFlows); err != nil {
		return nil, fmt.Errorf("failed to scan flow states: %w", err)
	}

	if err := fb.validate(); err != nil {
		return nil, fmt.Errorf("flow validation failed: %w", err)
	}

	f := defaultFlow{
		path:         fb.path,
		flow:         fb.flow,
		initialState: fb.initialState,
		errorState:   fb.errorState,
		endState:     fb.endState,
		subFlows:     fb.subFlows,
		stateDetails: fb.stateDetails,
		ttl:          fb.ttl,
		debug:        fb.debug,
	}

	return &f, nil
}

// MustBuild constructs and returns the Flow object, panics on error.
func (fb *defaultFlowBuilder) MustBuild() Flow {
	f, err := fb.Build()

	if err != nil {
		panic(err)
	}

	return f
}

// defaultFlowBuilder is a builder struct for creating a new SubFlow.
type defaultSubFlowBuilder struct {
	defaultFlowBuilderBase
}

// NewSubFlow creates a new SubFlowBuilder.
func NewSubFlow() SubFlowBuilder {
	fbBase := newFlowBuilderBase()
	return &defaultSubFlowBuilder{defaultFlowBuilderBase: fbBase}
}

func (sfb *defaultSubFlowBuilder) SubFlows(subFlows ...SubFlow) SubFlowBuilder {
	sfb.addSubFlows(subFlows...)
	return sfb
}

// State adds a new  transition to the flow.
func (sfb *defaultSubFlowBuilder) State(state StateName, actions ...Action) SubFlowBuilder {
	sfb.addState(state, actions...)
	return sfb
}

// Build constructs and returns the SubFlow object.
func (sfb *defaultSubFlowBuilder) Build() (SubFlow, error) {

	f := defaultFlow{
		flow:     sfb.flow,
		subFlows: sfb.subFlows,
	}

	return &f, nil
}

// MustBuild constructs and returns the SubFlow object, panics on error.
func (sfb *defaultSubFlowBuilder) MustBuild() SubFlow {
	sf, err := sfb.Build()

	if err != nil {
		panic(err)
	}

	return sf
}
