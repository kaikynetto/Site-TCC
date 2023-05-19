import styled from "styled-components";

export const ContatoContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    align-content: center;
`;

export const ContatoForm = styled.div`
    padding: 10px 40px;
    display: block;
    border-radius: 15px;
    background: #292929;
`;

export const Input = styled.input`
    padding: 10px 40px;
    display: block;
    margin-top: 10px;
    border-radius: 5px;
    width: 100%;
    background: transparent;
    border: 3px solid #b79950;
`;

export const InputMsg = styled.textarea`
    padding: 10px 40px;
    display: block;
    margin-top: 10px;
    border-radius: 5px;
    background: transparent;
    border: 3px solid #b79950;
`;

export const SendBtn = styled.button`
    padding: 10px 40px;
    background: #b79950;
    border-radius: 5px;
    margin-top: 10px;
    width: 100%;
    color: white;
    border: none;
    transition: 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;