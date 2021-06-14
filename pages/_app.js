import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";
import colors from "../data/colors.json";
import theme from "../utils/style-utils/colours";
import { getBreakpoint } from "../utils/style-utils/breakpoints";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Quicksand', sans-serif;
    font-size: .625rem;
    margin: 0;
    min-height: 100vh;
    padding: 0;
  }

  body {
    background: ${theme.body.bg};
    color: ${theme.body.text};
    
    margin: 0;
    padding: 0;
    min-height: 100vh;

    font-size: 1.6rem;
    line-height: 2.8rem;

    ${getBreakpoint("md")}{
      font-size: 1.8rem;
      line-height: 2.8rem;
    }

    ${getBreakpoint("lg")}{
      font-size: 2rem;
      line-height: 3.5rem;
    }
  }

  #__next {
    min-height: 100vh;
  }
`;

const getRandom = (length) => Math.floor(Math.random() * length);

const getTheme = () => {
  const darkLength = colors.dark.length;
  const lightLength = colors.light.length;
  const light = colors.light[getRandom(lightLength)];
  const dark = colors.dark[getRandom(darkLength)];

  return {
    background: "#e6eff2",
    themeFg: light,
    themeBg: dark,
    ...theme,
  };
};

export default function App({ Component, pageProps }) {
  const theme = {
    colors: getTheme(),
  };
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
