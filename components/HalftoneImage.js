import styled from "styled-components";

const ImageWrapper = styled.div`
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
`;

const ImageBg = styled.svg`
  background: ${({ theme }) => theme.colors.themeBg};
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 0.75;
  transition-timing-function: ease-in;
  transition-duration: 1s;
  transition-property: background;
  width: 100%;

  rect {
    fill: ${({ theme }) => theme.colors.themeFg};
    transition-timing-function: ease-in;
    transition-duration: 1s;
    transition-property: fill, background;
  }
`;

const HalftoneImage = ({ width, height, imgUrl }) => (
  <ImageWrapper>
    <ImageBg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMin slice"
    >
      <defs>
        <mask id="svgImage">
          <image xlinkHref={imgUrl} />
        </mask>
      </defs>
      <rect width="100%" height="100%" mask="url(#svgImage)" />
    </ImageBg>
  </ImageWrapper>
);

export default HalftoneImage;
