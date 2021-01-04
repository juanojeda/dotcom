import styled from "styled-components";
import { getBreakpoint } from "../utils/style-utils/breakpoints";
import HalftoneImage from "./HalftoneImage";
import Heading from "./Heading";

const Wrapper = styled.div`
  align-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.themeBg};
  color: ${({ theme }) => theme.colors.themeFg};
  display: flex;
  position: relative;
`;

const Body = styled.div`
  padding: 2rem;
  position: relative;
  z-index: 1;

  width: calc(9 / 12 * 100%);
  ${getBreakpoint("sm")} {
    width: calc(9 / 12 * 100%);
  }
  ${getBreakpoint("md")} {
    width: calc(7 / 12 * 100%);
  }
  ${getBreakpoint("lg")} {
    min-height: 100%;
    width: calc(10 / 12 * 100%);
  }
`;

const Masthead = ({ backgroundImage, heading, children, className }) => (
  <Wrapper className={className}>
    <HalftoneImage imgUrl={backgroundImage} width={920} height={613} />
    <Body>
      <Heading level="H1">{heading}</Heading>
      {children}
    </Body>
  </Wrapper>
);

export default Masthead;
