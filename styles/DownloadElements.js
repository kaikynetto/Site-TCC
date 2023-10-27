import styled from "styled-components";

export const DownloadContainer = styled.div`
    align-items: center;
    justify-content: center;
    height: 100vh;
    display: flex;
    align-content: center;
`;

export const DownloadButton = styled.a`
    
border-radius: 5px;
background: #b79950;
white-space: nowrap;
padding: 10px 22px;
margin-left: 15px;
color: white;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
&:hover {
text-decoration: none;
  transition: all 0.2s ease-in-out;
  background: #fff;
  color: #b79950;
}
`;