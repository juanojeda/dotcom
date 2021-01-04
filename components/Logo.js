import styled from "styled-components";
import Link from "next/link";
import colors from "../utils/style-utils/colours";

const LogoWrapper = styled.h1`
  font-family: "Quicksand", sans-serif;
  font-weight: 300;
  font-size: 1.8rem;
  left: 2rem;
  margin: 0 auto;
  position: absolute;
  top: 0;
  transition: 400ms ease all 100ms;

  a {
    background: transparent;
    box-shadow: none;
    color: ${colors.logo.text};
    display: block;
    font-family: inherit;
    height: 100%;
    padding: 4.2rem;
    width: 100%;

    &::before,
    &::after {
      content: none;
    }
  }
`;
const LogoBackground = styled.div`
  background: ${colors.logo.bg};
  transition-delay: 1s;
  transition-duration: 0.5s;
  transition-property: background;
  transition-timing-function: ease-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.themeBg};
    color: ${({ theme }) => theme.colors.themeFg};
    transition-delay: 0.2s;
  }
`;

const Logotype = styled.div`
  bottom: 1rem;
  left: 1rem;
  position: absolute;
  transition: 200ms ease color;
  &:hover {
    color: ${colors.logo.text};
  }
`;

const Logo = ({}) => {
  return (
    <LogoWrapper>
      <LogoBackground>
        <Link href="/">
          <a>
            <Logotype>Juan Ojeda</Logotype>
          </a>
        </Link>
      </LogoBackground>
    </LogoWrapper>
  );
};

export default Logo;
