package flows

import (
	"github.com/labstack/echo/v4"
	"github.com/teamhanko/hanko/backend/config"
	"github.com/teamhanko/hanko/backend/flow_api_basic_construct/actions"
	"github.com/teamhanko/hanko/backend/flow_api_basic_construct/common"
	"github.com/teamhanko/hanko/backend/flow_api_basic_construct/hooks"
	"github.com/teamhanko/hanko/backend/flow_api_basic_construct/services"
	"github.com/teamhanko/hanko/backend/flowpilot"
	"github.com/teamhanko/hanko/backend/persistence"
	"github.com/teamhanko/hanko/backend/session"
	"time"
)

func NewRegistrationFlow(cfg config.Config, persister persistence.Persister, passcodeService services.Passcode, sessionManager session.Manager, httpContext echo.Context) (flowpilot.Flow, error) {
	passkeyOnboardingSubFlow, err := NewPasskeyOnboardingSubFlow(cfg, persister)
	if err != nil {
		return nil, err
	}

	capabilitiesSubFlow := NewCapabilitiesSubFlow(cfg)
=======
	passkeySubFlow, err := NewPasscodeSubFlow(cfg, persister, passcodeService, httpContext)
	if err != nil {
		return nil, err
	}
>>>>>>> e0eb5601 (feat: flowpilot subflow for passcodes (#1187))

	return flowpilot.NewFlow("/registration").
		State(common.StateRegistrationInit, actions.NewSubmitRegistrationIdentifier(cfg, persister, passcodeService, httpContext), actions.NewLoginWithOauth()).
		State(common.StatePasswordCreation, actions.NewSubmitNewPassword(cfg)).
		BeforeState(common.StateSuccess, hooks.NewBeforeSuccess(persister, sessionManager, httpContext)).
		State(common.StateSuccess).
		State(common.StateError).
<<<<<<< HEAD
		SubFlows(capabilitiesSubFlow, passkeyOnboardingSubFlow).
		InitialState(common.StatePreflight, common.StateRegistrationInit).
=======
		SubFlows(passkeyOnboardingSubFlow, passkeySubFlow).
		InitialState(common.StateRegistrationPreflight).
>>>>>>> e0eb5601 (feat: flowpilot subflow for passcodes (#1187))
		ErrorState(common.StateError).
		TTL(10 * time.Minute).
		Debug(true).
		MustBuild(), nil
}