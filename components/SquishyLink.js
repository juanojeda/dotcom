import styled, { css } from "styled-components";
import Link from "next/link";

const spottedBg = (dotColour) => css`
  background-image: radial-gradient(circle, ${dotColour} 1px, transparent 0),
    radial-gradient(circle, ${dotColour} 1px, transparent 0);
  background-position: 1px 1px, 5px 5px;
  background-repeat: repeat;
  background-size: 8px 8px, 8px 8px;
`;

const LinkInner = styled.a`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.actions.dark};
  cursor: pointer;
  display: inline-block;
  margin: -3px;
  padding: 3px;
  position: relative;
  text-decoration: none;
  transition-duration: 0.3s;
  transition-property: background color;
  transition-timing-function: ease-in;

  &:visited {
    color: ${({ theme }) => theme.colors.actions.dark};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.actions.transp};
    color: ${({ theme }) => theme.colors.actions.base};
    z-index: 1;
  }
  &::after,
  &::before {
    content: "";
    display: block;
    left: 0;
    position: absolute;
  }

  &::before {
    ${({ theme }) => spottedBg(theme.colors.actions.light)};
    height: 100%;
    opacity: 0;
    top: 0;
    transition-delay: 0.4s;
    transition-duration: 0.5s;
    transition-property: opacity width;
    transition-timing-function: ease-out;
    width: 0;
    z-index: -1;
  }

  &::after {
    background: ${({ theme }) => theme.colors.actions.light};
    height: 3px;
    transition-delay: 0.2s;
    transition-duration: 0.7s;
    transition-property: background width;
    transition-timing-function: ease-out;
    width: 100%;
  }
  &:hover {
    &::before {
      opacity: 1;
      transition-delay: 0.2s;
      width: 100%;
    }

    &::after {
      background: ${({ theme }) => theme.colors.actions.base};
      transition-delay: 0.5s;
    }
  }

  ${({ isBlock }) =>
    isBlock &&
    css`
      display: block;
      margin: 1.5rem 0;

      &::after {
        width: 25%;
      }

      &:hover {
        &::after {
          width: 75%;
        }
      }
    `}
`;

const SquishyLink = ({ isBlock, href, linkText }) => (
  <Link href={href}>
    <LinkInner href={href} isBlock={isBlock}>
      {linkText}
    </LinkInner>
  </Link>
);

export default SquishyLink;
