import styled from "styled-components";
import {Link as LinkS} from "react-scroll"

export const EncontreContainer = styled.div`
  color: #fff;
  margin-bottom: 20vh;
  @media screen and (max-width: 768px) {
    padding: 100px 0px;
  }
`;

export const EncontreWrapper = styled.div`
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

export const EncontreRow = styled.div`
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

export const TitleSection = styled.h1`
  color: #b79950;
  opacity: 0.6;
  font-size: 22px;
  margin-bottom: 10px;
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

export const Heading2 = styled.h2`
  font-size: 22px;
  opacity: 0.7;
`;

export const CardsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  margin-top: 20px;
  grid-gap: 60px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    // padding: 0 15px;
  }
`;

export const Card = styled.div`
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  border: 2px solid #b79950;

  &:hover {
    background: #b79950;
    padding: 12px 12px;
    cursor: pointer;
    transition: 0.5s;
  }
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