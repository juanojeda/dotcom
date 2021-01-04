import { transparentize } from "polished";

const colourGreyBlack = "#04181e";
const colourGrey_1 = "#344b52";
const colourGrey_2 = "#627d85";
const colourGrey_3 = "#9ab1b8";
const colourGrey_4 = "#d1dbde";
const colourGreyBg = "#e6eff2";
const colourGreyWhite = "#f2f6f7";

const colourActionDark = "#150f80";
const colourActionBase = "#3366e7";
const colourActionLight = "#9ecdff";
const colourActionTransp = transparentize(0.75, colourActionLight);
const colourActionTranspOpq = "#cde7fa";
const colours = {
  logo: {
    bg: colourGreyBlack,
    text: colourGreyWhite,
  },
  body: {
    bg: colourGreyBg,
    text: colourGreyBlack,
    text_light: colourGreyWhite,
  },
  actions: {
    dark: colourActionDark,
    base: colourActionBase,
    light: colourActionLight,
    transp: colourActionTransp,
    transpOpq: colourActionTransp,
  },
};

export default colours;
