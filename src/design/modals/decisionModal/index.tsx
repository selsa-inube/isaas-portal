import { UseDecisionModal } from "@hooks/design/useDecisionModal";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { DecisionModalUI } from "./interface";
import { IDecisionModal } from "./types";

const DecisionModal = (props: IDecisionModal) => {
  const {
    actionText,
    icon = <></>,
    withIcon = false,
    description,
    isLoading = false,
    justificationOfDecision = false,
    portalId,
    title,
    appearance = ComponentAppearance.PRIMARY,
    onClick,
    onCloseModal,
    setFieldEntered,
    showCancelButton = true,
  } = props;

  const { formik, isMobile, isMobileTextarea, getFieldState, comparisonData } =
    UseDecisionModal({
      justificationOfDecision,
      setFieldEntered,
    });

  const node = document.getElementById(portalId);
  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }

  return (
    <DecisionModalUI
      actionText={actionText}
      appearance={appearance}
      comparisonData={comparisonData}
      description={description}
      formik={formik}
      icon={icon}
      isLoading={isLoading}
      justificationOfDecision={justificationOfDecision}
      onClick={onClick}
      onCloseModal={onCloseModal}
      portalId={portalId}
      title={title}
      withIcon={withIcon}
      isMobile={isMobile}
      isMobileTextarea={isMobileTextarea}
      getFieldState={getFieldState}
      showCancelButton={showCancelButton}
    />
  );
};

export { DecisionModal };
