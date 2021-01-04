import styled from "styled-components";
import { getBreakpoint } from "../utils/style-utils/breakpoints";

const Level = {
  H1: styled.h1`
    font-size: 5rem;
    line-height: 7rem;
    margin-bottom: 3.5rem;
    margin-top: 1.75rem;
    ${getBreakpoint("md")} {
      font-size: 8.5rem;
      line-height: 10.6rem;
      margin-bottom: 7.1rem;
      margin-top: 3.55rem;
    }
    ${getBreakpoint("lg")} {
      font-size: 10.8rem;
      line-height: 13.3rem;
      margin-bottom: 10.6rem;
      margin-top: 5.3rem;
    }
  `,
  H2: styled.h2`
    font-size: 4rem;
    line-height: 5.3rem;
    margin-bottom: 3.5rem;
    margin-top: 1.75rem;
    ${getBreakpoint("md")} {
      font-size: 5rem;
      line-height: 7rem;
      margin-bottom: 3.5rem;
      margin-top: 1.75rem;
    }
    ${getBreakpoint("lg")} {
      font-size: 7rem;
      line-height: 9.8rem;
      margin-bottom: 7.1rem;
      margin-top: 3.55rem;
    }
  `,
  H3: styled.h3`
    font-size: 2.5rem;
    line-height: 3.5rem;
    margin-bottom: 3.5rem;
    margin-top: 1.75rem;
    ${getBreakpoint("md")} {
      font-size: 4rem;
      line-height: 5.3rem;
      margin-bottom: 3.5rem;
      margin-top: 1.75rem;
    }
    ${getBreakpoint("lg")} {
      font-size: 5rem;
      line-height: 7rem;
      margin-bottom: 3.5rem;
      margin-top: 1.75rem;
    }
  `,
  H4: styled.h4`
    font-size: 2.3rem;
    line-height: 3.5rem;
    margin-bottom: 3.5rem;
    margin-top: 1.75rem;
    ${getBreakpoint("md")} {
      font-size: 2.8rem;
      line-height: 3.5rem;
      margin-bottom: 3.5rem;
      margin-top: 1.75rem;
    }
    ${getBreakpoint("lg")} {
      font-size: 4rem;
      line-height: 5.3rem;
      margin-bottom: 3.5rem;
      margin-top: 1.75rem;
    }
  `,
  H5: styled.h5`
    font-size: 2rem;
    line-height: 3.5rem;
    margin-bottom: 3.5rem;
    margin-top: 1.75rem;
    ${getBreakpoint("md")} {
      font-size: 2.3rem;
      line-height: 3.5rem;
      margin-bottom: 3.5rem;
      margin-top: 1.75rem;
    }
    ${getBreakpoint("lg")} {
      font-size: 2.8rem;
      line-height: 3.5rem;
      margin-bottom: 3.5rem;
      margin-top: 1.75rem;
    }
  `,
  H6: styled.h6`
    font-size: 1.7rem;
    line-height: 3.5rem;
    margin-bottom: 3.5rem;
    margin-top: 1.75rem;
    ${getBreakpoint("md")} {
      font-size: 1.7rem;
      line-height: 3.5rem;
      margin-bottom: 3.5rem;
      margin-top: 1.75rem;
    }
    ${getBreakpoint("lg")} {
      font-size: 2rem;
      line-height: 3.5rem;
      margin-bottom: 3.5rem;
      margin-top: 1.75rem;
    }
  `,
};

const Heading = ({ level = "H1", children, className }) => {
  const StyledHeading = Level[level];

  return <StyledHeading className={className}>{children}</StyledHeading>;
};

export default Heading;
