import styled from "styled-components";
import {Link as LinkS} from "react-scroll"

export const ContatoContainer = styled.div`
  color: #fff;
  @media screen and (max-width: 768px) {
    padding: 100px 0px;
    // margin-bottom: 35vh;
  }
`;

export const ContatoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

export const ContatoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "col1 col2";
  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
`;

export const Column1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: var(--primary-color);
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  align-items:center;
  justify-content: center;
  align-content: center;
  text-align: center;
  display: flex;
  grid-area: col2;
`;

export const Heading = styled.h1`
  font-size: 40px;
`;

export const Subtitle = styled.h2`
  font-size: 22px;
  font-weight: 200;
  opacity: 0.7;
  margin-top: 20px;
`;

export const ContactDiv = styled.div`
  display: flex;
  align-content: center;
  align-content: center;
`;

export const ContactText = styled.h1`
  font-size: 18px;
  margin-left: 10px;
`;

export const InputBox = styled.div`
    display: flex;
    width: 110%;
    padding: 10px 10px;
    justify-content: flex-start;
    border: 1px solid var(--primary-color);
    background: none;
    margin-bottom: 10px;
    color: var(--primary-color);
    border-radius: 5px;
`;

export const Input = styled.input`
border: none;
background: none;
color: var(--primary-color);
outline: none;
width: 100%;
margin-left: 5px;
display: block;
`;

export const InputArea = styled.textarea`
border: none;
background: none;
color: var(--primary-color);
outline: none;
height: 100px;
width: 110%;
margin-left: 5px;
display: block;
`;

export const SendBtn = styled.input`
width: 110%;
  background: var(--primary-color);
  border: none;
  border-radius: 5px;
  padding: 10px 30px;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;