import React, { useState } from 'react'
import { Column1, Column2, ContactDiv, ContactText, ContatoContainer, ContatoForm, ContatoRow, ContatoWrapper, Heading, Input, InputArea, InputBox, InputMsg, SendBtn, Subtitle } from '../src/components/Contato/ContatoElements'
import {  BsTelephone } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineFileImage,AiOutlineMessage,AiOutlineUser, AiOutlineInstagram } from 'react-icons/ai';
export default function Contato() {

  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendForm = async () => {
    if(!name) {
        setError("Insira seu nome!")
    } else if(!email) {
        setError("Insira seu email!")
    } else if(!message) {
        setError("Insira sua mensagem!");
    }
  }

  return (
    <>
        <ContatoContainer>
            <ContatoWrapper>
              <ContatoRow>
                <Column1>
                  <div style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center', alignContent: 'center'}}>
                    <div>
                      <Heading>Fale com a nossa equipe!</Heading>
                      <Subtitle>Entre em contato com a nossa equipe pelo formulário ao lado, caso não seja respondido, contate-nos nos seguintes meios abaixo.</Subtitle>
                    </div>
                    <div style={{marginTop: 20, marginLeft: '35%', justifyContent: 'center', textAlign: 'center', alignItems: 'center', alignContent: 'center'}}>
                      <ContactDiv>
                        <BsTelephone size={32} color='white'/>
                        <ContactText>(67) 3573-2763</ContactText>
                      </ContactDiv>
                      <ContactDiv>
                        <AiOutlineMail size={32} color='white'/>
                        <ContactText>taskingartemis@gmail.com</ContactText>
                      </ContactDiv>
                      <ContactDiv>
                        <AiOutlineInstagram size={32} color='white'/>
                        <ContactText>@usetasking</ContactText>
                      </ContactDiv>
                    </div>
                  </div>
                </Column1>
                <Column2>
                  <form style={{padding: 10, maxWidth: "100%"}}>
                    <InputBox>
                      <AiOutlineUser size={26} fill='#b79950'/>
                      <Input type="text" placeholder='Digite o seu nome'/>
                    </InputBox>
                    <InputBox>
                      <AiOutlineMail size={26} fill='#b79950'/>
                      <Input type="text" placeholder='Digite o seu email'/>
                    </InputBox>
                    <InputBox>
                      <AiOutlineMessage size={26} fill='#b79950'/>
                      <InputArea type="text" placeholder='Digite o seu assunto'/>
                    </InputBox>
                    <InputBox>
                      <AiOutlineFileImage size={26} fill='#b79950'/>
                      <Input type="file" placeholder='Digite o seu assunto'/>
                    </InputBox>
                    <SendBtn type='submit' value={'Enviar mensagem'}/>
                  </form>
                </Column2>
              </ContatoRow>
            </ContatoWrapper>
        </ContatoContainer>
    </>
  )
}
