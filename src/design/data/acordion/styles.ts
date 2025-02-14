import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

const StyledContainer = styled.div`
  display: flex;
  padding: ${basic.spacing.s150} ${basic.spacing.s100};
  flex-direction: column;
  gap: ${basic.spacing.s100};
  border-radius: ${basic.spacing.s100};
  box-sizing: border-box;
  align-items: stretch;
  width: 100%;
  max-height: 385px;
  border: 1px solid
    ${({ theme }) =>
      theme.color?.stroke?.gray?.regular || inube.palette.neutral.N40};
`;

const StyledHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

export { StyledContainer, StyledHead };
