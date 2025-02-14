import styled from "styled-components";
import { Link } from "react-router-dom";
import { basic } from "@design/tokens";

interface IStyledCollapseIcon {
  $collapse: boolean;
  $isTablet: boolean;
  $smallScreen?: boolean;
}
interface IStyledContainer {
  $smallScreen?: boolean;
  $typeTabs?: boolean;
}
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-bottom: ${basic.spacing.s500};
  height: 100vh;
  overflow-y: auto;
`;
const StyledContainerSection = styled.div<IStyledContainer>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: ${basic.spacing.s200};
  gap: ${basic.spacing.s300};
`;

const StyledHeaderContainer = styled.div`
  & div > div {
    cursor: pointer;
  }
`;

const StyledContentImg = styled(Link)`
  width: 100px;
`;

const StyledLogo = styled.img`
  max-width: 100px;
`;

const StyledTitle = styled.div<IStyledContainer>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-S300, ${basic.spacing.s300});
  align-self: stretch;

  padding: ${(props) =>
    props.$smallScreen
      ? ` ${(basic.spacing.s200, basic.spacing.s16)} `
      : `${basic.spacing.s600} ${basic.spacing.s1600} ${basic.spacing.s1000} `};
`;

const StyledContainerCards = styled.div<IStyledContainer>`
  box-sizing: border-box;
  padding: 170px;
  display: flex;
  flex-wrap: wrap;
  gap: ${basic.spacing.s400};

  justify-content: ${(props) => props.$smallScreen && "center"};
  padding: ${(props) =>
    props.$smallScreen
      ? `${basic.spacing.s0}`
      : `${basic.spacing.s0} ${basic.spacing.s1400} ${basic.spacing.s400}`};
`;

const StyledFooter = styled.footer`
  display: flex;
  margin-top: auto;
  padding: ${basic.spacing.s0} ${basic.spacing.s1600} ${basic.spacing.s0};
  justify-content: center;
`;

const StyledCollapseIcon = styled.div<IStyledCollapseIcon>`
  display: flex;
  transition: all 500ms ease;
  position: absolute;
  top: 13.5px;
  transform: ${({ $collapse }) =>
    $collapse ? "rotate(-90deg)" : "rotate(90deg)"};
  left: ${({ $isTablet }) => ($isTablet ? "150px" : "142px")};
`;

const StyledCollapse = styled.div`
  position: absolute;
  margin-top: 10px;
`;

export {
  StyledContainer,
  StyledHeaderContainer,
  StyledTitle,
  StyledContentImg,
  StyledLogo,
  StyledContainerCards,
  StyledFooter,
  StyledContainerSection,
  StyledCollapseIcon,
  StyledCollapse,
};
