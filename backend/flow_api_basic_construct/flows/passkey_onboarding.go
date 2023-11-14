package flows

import (
	"github.com/go-webauthn/webauthn/protocol"
	webauthnLib "github.com/go-webauthn/webauthn/webauthn"
	"github.com/teamhanko/hanko/backend/config"
	"github.com/teamhanko/hanko/backend/flow_api_basic_construct/actions"
	"github.com/teamhanko/hanko/backend/flow_api_basic_construct/common"
	"github.com/teamhanko/hanko/backend/flowpilot"
	"github.com/teamhanko/hanko/backend/persistence"
	"time"
)

func NewPasskeyOnboardingSubFlow(cfg config.Config, persister persistence.Persister) (flowpilot.SubFlow, error) {
	// TODO:

	wa, err := getWebauthn(cfg)
	if err != nil {
		return nil, err
	}
	return flowpilot.NewSubFlow().
		State(common.StateOnboardingCreatePasskey, actions.NewGetWACreationOptions(cfg, persister, wa), actions.NewSkip(cfg)).
		State(common.StateOnboardingVerifyPasskeyAttestation, actions.NewSendWAAttestationResponse(persister, wa)).
		Build()
}

func getWebauthn(cfg config.Config) (*webauthnLib.WebAuthn, error) {
	requireResidentKey := false

	return webauthnLib.New(&webauthnLib.Config{
		RPID:                  cfg.Webauthn.RelyingParty.Id,
		RPDisplayName:         cfg.Webauthn.RelyingParty.DisplayName,
		RPOrigins:             cfg.Webauthn.RelyingParty.Origins,
		AttestationPreference: protocol.PreferNoAttestation,
		AuthenticatorSelection: protocol.AuthenticatorSelection{
			RequireResidentKey: &requireResidentKey,
			ResidentKey:        protocol.ResidentKeyRequirementDiscouraged,
			UserVerification:   protocol.VerificationRequired,
		},
		Debug: false,
		Timeouts: webauthnLib.TimeoutsConfig{
			Login: webauthnLib.TimeoutConfig{
				Enforce: true,
				Timeout: time.Duration(cfg.Webauthn.Timeout) * time.Millisecond,
			},
			Registration: webauthnLib.TimeoutConfig{
				Enforce: true,
				Timeout: time.Duration(cfg.Webauthn.Timeout) * time.Millisecond,
			},
		},
	})
}