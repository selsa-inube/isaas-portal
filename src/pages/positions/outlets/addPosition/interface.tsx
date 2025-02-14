import { Stack } from "@inubekit/inubekit";
import { Breadcrumbs } from "@inubekit/inubekit";
import { Assisted } from "@inubekit/inubekit";
import { PageTitle } from "@design/label/PageTitle";
import { InitializerForm } from "@design/forms/InitializerForm";
import { Button } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { DecisionModal } from "@design/modals/decisionModal";
import { GeneralInformationForm } from "@pages/positions/forms/generalInformationForm";
import { VerificationForm } from "@design/forms/verificationForm";
import { createPositionConfig } from "@config/positions/addPositions/assisted";
import { RequestProcessModal } from "@design/modals/requestProcessModal";
import {
  ApplicationStatus,
  FinishModal,
} from "@config/positions/verificationForm";
import { IAddPositionUI } from "./types";

const AddStaffRolesUI = ({
  currentStep,
  generalInformationRef,
  initialGeneralInformationValues,
  steps,
  setSelectedToggle,
  onNextStep,
  handlePreviousStep,
  handleNextStep,
  onToggleModal,
  onToggleApplicationStatus,
  onPreviousStep,
  setIsCurrentFormValid,
  setCurrentStep,
  smallScreen,
  roles,
  onFinishForm,
  onFinishFormApplicationStatus,
  showModal,
  showModalApplicationStatus,
  requestSteps,
  showRequestProcessModal,
  disabled,
  formValues,
}: IAddPositionUI) => {
  return (
    <Stack
      direction="column"
      width="-webkit-fill-available"
      padding={
        smallScreen
          ? `${basic.spacing.s200}`
          : `${basic.spacing.s300} ${basic.spacing.s800}`
      }
    >
      <Stack gap={basic.spacing.s300} direction="column">
        <Stack gap={basic.spacing.s300} direction="column">
          <Breadcrumbs crumbs={createPositionConfig[0].crumbs} />
          <PageTitle
            title={createPositionConfig[0].title}
            description={createPositionConfig[0].description}
            navigatePage="/positions/positions"
          />
        </Stack>
        <Stack gap={basic.spacing.s300} direction="column">
          <Assisted
            step={steps[currentStep - 1]}
            totalSteps={steps.length}
            onBackClick={onPreviousStep}
            onNextClick={onNextStep}
            onSubmitClick={onToggleModal}
            disableNext={disabled}
            controls={{
              goBackText: "Anterior",
              goNextText: "Siguiente",
              submitText: "Finalizar",
            }}
            size={smallScreen ? "small" : "large"}
          />
          <Stack direction="column">
            {currentStep === 1 && (
              <GeneralInformationForm
                ref={generalInformationRef}
                initialValues={initialGeneralInformationValues}
                onFormValid={setIsCurrentFormValid}
                handleNextStep={onNextStep}
              />
            )}
            {currentStep === 2 && (
              <InitializerForm
                dataOptionsForms={roles}
                dataOptionsValueSelect={formValues.applicationStaff.values}
                setSelectedToggle={setSelectedToggle}
              />
            )}

            {currentStep === 3 && (
              <VerificationForm
                updatedData={{
                  generalInformation: {
                    isValid: true,
                    values: initialGeneralInformationValues,
                  },
                  rolesStaff: {
                    isValid: true,
                    values: formValues.rolesStaff.values,
                  },
                }}
                requestSteps={[]}
                showModal={false}
                showRequestProcessModal={false}
                handleStepChange={(stepId) => setCurrentStep(stepId)}
              />
            )}
          </Stack>
          <Stack gap="16px" justifyContent="flex-end">
            <Button
              onClick={handlePreviousStep}
              type="button"
              disabled={currentStep === steps[0].id}
              spacing="compact"
              variant="none"
              appearance="gray"
            >
              Atrás
            </Button>
            <Button
              onClick={() =>
                currentStep === steps.length
                  ? onToggleModal()
                  : handleNextStep()
              }
              spacing="compact"
              disabled={disabled}
            >
              {currentStep === steps.length ? "Enviar" : "Siguiente"}
            </Button>
          </Stack>
        </Stack>
        {showModal && (
          <DecisionModal
            portalId="portal"
            title={FinishModal.title}
            description={FinishModal.description}
            actionText={FinishModal.actionText}
            onCloseModal={onToggleModal}
            onClick={onFinishForm}
          />
        )}
        {showRequestProcessModal && (
          <RequestProcessModal
            title="Procesando solicitud"
            description="Hemos recibido tu solicitud y se encuentra en proceso.Por favor, espera mientras la gestionamos."
            portalId="portal"
            requestSteps={requestSteps}
          />
        )}
        {showModalApplicationStatus && (
          <DecisionModal
            portalId="portal"
            title={ApplicationStatus.title}
            description={ApplicationStatus.description}
            actionText={ApplicationStatus.actionText}
            onCloseModal={onToggleApplicationStatus}
            onClick={onFinishFormApplicationStatus}
            showCancelButton={false}
          />
        )}
      </Stack>
    </Stack>
  );
};

export { AddStaffRolesUI };
