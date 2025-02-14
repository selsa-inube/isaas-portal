import { Icon } from "@inubekit/inubekit";
import { Text } from "@inubekit/inubekit";
import { Stack } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

import { StyledMenuItemLink } from "./styles";
import { MenuItemSpacingType } from "./types";

interface IMenuItem {
  title: string;
  description?: string;
  spacing?: MenuItemSpacingType;
  iconBefore?: React.JSX.Element;
  iconAfter?: React.JSX.Element;
  isDisabled?: boolean;
  path?: string;
  onClick?: () => void;
}

const MenuItem = ({
  title,
  description,
  spacing = "wide",
  iconBefore,
  iconAfter,
  isDisabled = false,
  path = "#",
  onClick,
}: IMenuItem) => {
  return (
    <StyledMenuItemLink
      spacing={spacing}
      disabled={isDisabled}
      to={path}
      onClick={onClick}
    >
      <Stack gap={basic.spacing.s12} alignItems="center">
        {iconBefore && (
          <Icon
            icon={iconBefore}
            spacing="narrow"
            size="24px"
            appearance="dark"
            disabled={isDisabled}
          />
        )}
        <Stack direction="column" gap={basic.spacing.s4}>
          <Text type="label" size="large" disabled={isDisabled}>
            {title}
          </Text>
          <Text
            type="body"
            size="small"
            appearance="gray"
            disabled={isDisabled}
          >
            {description}
          </Text>
        </Stack>
      </Stack>
      {iconAfter && (
        <Icon
          icon={iconAfter}
          spacing="narrow"
          size="24px"
          appearance="dark"
          disabled={isDisabled}
        />
      )}
    </StyledMenuItemLink>
  );
};

export { MenuItem };
export type { IMenuItem };
