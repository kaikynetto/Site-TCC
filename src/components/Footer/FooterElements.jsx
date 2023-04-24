import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 16px;

    @media screen and (max-width: 768px) {
        // padding: 20px;
        // height: 170vh;
        margin-top: 50vh;
    }
    @media screen and (max-width: 480px) {
        // padding: 10px 30px;
    }
`;

export const HeadingContainer = styled.h1`
    // margin-bottom: 15px;
    // text-align: left;
    // padding: 0 225px;

    @media screen and (max-width: 768px) {
        padding: 0 0;
        text-align: center;
    }
    @media screen and (max-width: 480px) {
        padding: 0 0;
        text-align: center;
    }
`;

export const SubtitleContainer = styled.p`
    margin-bottom: 15px;
    padding: 0 225px;

    @media screen and (max-width: 768px) {
        padding: 0 0;
        text-align: center;
    }
    @media screen and (max-width: 480px) {
        padding: 0 0;
        text-align: center;
    }
`;

export const FooterWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    // grid-gap: 16px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        // padding: 0 20px;
    }
`;

export const FooterCardInstagram = styled.div`
    justify-content: center;
    background: #405DE6;
    padding: 15px 0px;
    text-align: center;
    transition: all 0.35s ease-in-out;

    &:hover {
        background: #2641c3;
        cursor: pointer;
    }
`;


export const FooterCardTwitter = styled.div`
    justify-content: center;
    background: #1DA1F2;
    padding: 15px 0px;
    text-align: center;
    transition: all 0.35s ease-in-out;

    &:hover {
        background: #158ed8;
        cursor: pointer;
    }
`;

export const Heading = styled.h3`
    margin-top: 5px;
    margin-bottom: 5px;
`;
