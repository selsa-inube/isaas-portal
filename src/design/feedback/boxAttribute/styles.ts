import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

interface IStyledBoxAttribute {
  $smallScreen?: boolean;
}

const StyledBoxAttribute = styled.div<IStyledBoxAttribute>`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: ${({ $smallScreen }) =>
    $smallScreen ? basic.spacing.s100 : basic.spacing.s150};
  width: auto;
  background-color: ${({ theme }) =>
    theme.color?.surface?.gray.clear || inube.palette.neutral.N10};
`;

export { StyledBoxAttribute };
