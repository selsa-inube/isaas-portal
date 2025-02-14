import { Text } from "@inubekit/inubekit";
import { Icon } from "@inubekit/inubekit";
import { ComponentAppearance } from "@ptypes/aparences.types";
import {
  StyledNotificationContainer,
  StyledNotificationElement,
  StyledTab,
} from "./styles";

interface ITab {
  label: string;
  id: string;
  disabled?: boolean;
  selected?: boolean;
  notificationIndicators?: number;
}
const Tab = (props: ITab) => {
  const {
    disabled = false,
    selected = false,
    id,
    label,
    notificationIndicators,
  } = props;
  const selectedAppearance = ComponentAppearance.PRIMARY;
  return (
    <StyledTab
      disabled={disabled}
      selected={selected}
      id={id}
      appearance={selectedAppearance}
    >
      <Text
        type="label"
        size="medium"
        appearance={
          selected
            ? (selectedAppearance )
            : ComponentAppearance.GRAY
        }
        disabled={disabled}
        textAlign="start"
        weight="bold"
      >
        {label}
      </Text>
      {notificationIndicators && notificationIndicators > 0 && (
        <Icon
          icon={
            <StyledNotificationContainer>
              <StyledNotificationElement>
                {notificationIndicators}
              </StyledNotificationElement>
            </StyledNotificationContainer>
          }
          appearance="danger"
          cursorHover={true}
          disabled={false}
          spacing="narrow"
          variant="filled"
          shape="circle"
          size="15px"
        />
      )}
    </StyledTab>
  );
};
export { Tab };
export type { ITab };
