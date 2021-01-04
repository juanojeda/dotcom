const breakpoints = [
  { key: "zero", val: 0 },
  { key: "sm", val: 600 },
  { key: "md", val: 768 },
  { key: "lg", val: 1140 },
];

export const gridBreakpoints = breakpoints.reduce(
  (acc, curr) => ({ ...acc, [curr.key]: curr.val }),
  {}
);

const mq = (range) => `@media screen and (${range})`;
export const getMqWidth = (key) =>
  breakpoints.filter((bp) => bp.key === key).map((bp) => bp.val)[0];

export const getBreakpoint = (levelMin, levelMax) => {
  const min = `min-width: ${getMqWidth(levelMin)}px`;
  const max = levelMax ? `) and (max-width: ${getMqWidth(levelMax)}px` : "";
  return mq(`${min}${max}`);
};
