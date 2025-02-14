import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

interface IStyledModal {
  $smallScreen: boolean;
}

const StyledModal = styled.div<IStyledModal>`
  display: flex;
  flex-direction: column;
  background-color: ${inube.palette.neutral.N0};
  width: ${(props) => (props.$smallScreen ? "340px" : "536px")};
  height: ${(props) => (props.$smallScreen ? "240px" : "271px")};
  border-radius: ${basic.spacing.s100};
  padding: ${(props) =>
    props.$smallScreen ? `${basic.spacing.s150}` : `${basic.spacing.s300}`};
  box-sizing: border-box;
`;

export { StyledModal };
