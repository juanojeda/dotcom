import styled from "styled-components";
import Image from "next/image";
import HalftoneImage from "../components/HalftoneImage";
import Masthead from "../components/Masthead";
import Logo from "../components/Logo";
import { getBreakpoint } from "../utils/style-utils/breakpoints";
import Heading from "../components/Heading";
import SquishyLink from "../components/SquishyLink";

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.background};
  height: 100vh;
  width: 100vw;
`;
const Header = styled.div`
  height: 6rem;
  position: relative;
  z-index: 1;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 6rem);

  ${getBreakpoint("lg")} {
    flex-direction: row;
  }
`;
const StyledMasthead = styled(Masthead)`
  flex: 0 0 50%;
`;
const Content = styled.div`
  background: ${({ theme }) => theme.colors.themeFg};
  color: ${({ theme }) => theme.colors.themeBg};
  flex: 0 0 50%;
  padding: 2rem 4rem;
`;
const ContentWrapper = styled.div`
  width: calc(9 / 12 * 100%);
`;
const ContactList = styled.div``;

export default function Home() {
  return (
    <Wrapper>
      <Header>
        <Logo />
      </Header>
      <Body>
        <StyledMasthead
          heading="Hello, my name is Juan :)"
          backgroundImage="/images/profile.jpg"
        />
        <Content>
          <ContentWrapper>
            <Heading level="H3">You can find me online</Heading>
            <ContactList>
              <SquishyLink
                href="https://www.instagram.com/foodandpuns/"
                linkText="Instagram"
                isBlock
              />
              <SquishyLink
                href="https://www.linkedin.com/in/juan-ojeda/"
                linkText="LinkedIn"
                isBlock
              />
              <SquishyLink
                href="https://github.com/juanojeda"
                linkText="Github"
                isBlock
              />
            </ContactList>
          </ContentWrapper>
        </Content>
      </Body>
    </Wrapper>
  );
}
