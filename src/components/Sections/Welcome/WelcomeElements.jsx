import styled from "styled-components";
import {Link as LinkS} from "react-scroll"

export const HeroContainer = styled.div`
  color: #fff;
  margin-bottom: 20vh;
  @media screen and (max-width: 768px) {
    padding: 100px 0px;
    // margin-bottom: 35vh;
  }
`;

export const HeroWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 84vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const HeroRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";
  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  align-items:center;
  justify-content: center;
  align-content: center;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 16px;
`;

export const Heading = styled.h1`
  color: #b79950;
  // text-transform: uppercase;
`;

export const Subtitle = styled.h1`
  color: white;
  opacity: 0.6;
  align-items: start;
  justify-content: center;
  // text-align: center;
  align-content: center;
  font-weight: 200;
  margin-top: 15px;
  font-size: 22px;
  // text-transform: uppercase;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  text-align: center;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;