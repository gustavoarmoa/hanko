package actions

import (
	"fmt"
	"github.com/teamhanko/hanko/backend/config"
	"github.com/teamhanko/hanko/backend/flow_api_basic_construct/common"
	"github.com/teamhanko/hanko/backend/flowpilot"
)

func NewContinueToPasscodeConfirmation(cfg config.Config, template string) flowpilot.Action {
	return ContinueToPasscodeConfirmation{cfg: cfg, template: template}
}

type ContinueToPasscodeConfirmation struct {
	cfg      config.Config
	template string
}

func (a ContinueToPasscodeConfirmation) GetName() flowpilot.ActionName {
	return common.ActionContinueToPasscodeConfirmation
}

func (a ContinueToPasscodeConfirmation) GetDescription() string {
	return fmt.Sprintf("Send a %s passcode code via email.", a.template)
}

func (a ContinueToPasscodeConfirmation) Initialize(c flowpilot.InitializationContext) {
	if !a.cfg.Passcode.Enabled || !c.Stash().Get("email").Exists() {
		c.SuspendAction()
	}
}

func (a ContinueToPasscodeConfirmation) Execute(c flowpilot.ExecutionContext) error {
	if err := c.Stash().Set("passcode_template", a.template); err != nil {
		return fmt.Errorf("failed to set passcode_template to stash: %w", err)
	}

	return c.ContinueFlow(common.StateLoginPasscodeConfirmation)
}
