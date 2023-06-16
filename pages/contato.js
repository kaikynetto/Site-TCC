import React, { useState } from 'react'
import { Column1, Column2, ContactDiv, ContactText, ContatoContainer, ContatoForm, ContatoRow, ContatoWrapper, Heading, Input, InputArea, InputBox, InputMsg, SendBtn, Subtitle } from '../src/components/Contato/ContatoElements'
import {  BsTelephone } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineFileImage,AiOutlineMessage,AiOutlineUser, AiOutlineInstagram } from 'react-icons/ai';
import axios from 'axios';
import {AiFillCheckCircle } from 'react-icons/ai';
import { NavBtn, NavBtnLink } from '../src/components/Navbar/NavbarElements';
export default function Contato() {

  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [imageData, setImageData] = useState('');
  const [formSended, setFormSended] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const base64Image = e.target.result;
      setImageData(base64Image);
    };

    reader.readAsDataURL(file);


  };

  const sendForm = () => {
    if(!name) {
        setError("Insira seu nome!")
    } else if(!email) {
        setError("Insira seu email!")
    } else if(!message) {
        setError("Insira sua mensagem!");
    } else {
      setError("");

      const data = {
        name,
        email,
        message,
        image: imageData | "undefined"
      }
    
      axios({
        method: "POST",
        url: `http://localhost/artemis-api/feedback.php`,
        data: {
          name,
          email,
          message,
          image: imageData || "undefined"
        }
      }).then((res) => {
        if(res.data.status == "OK!") {
          setFormSended(true);
        } else {
          alert("Erro ao enviar seu formúlario, tente novamente!");
        }
      })
      
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
                  {formSended == false && (
                    <>
                      <div  style={{padding: 10, maxWidth: "100%"}}>
                    {error && (
                      <>
                        <h1 style={{fontSize: 22, marginBottom: 20, color: 'red'}}>{error}</h1>
                      </>
                    )}
                    <InputBox>
                      <AiOutlineUser size={26} fill='#b79950'/>
                      <Input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Digite o seu nome'/>
                    </InputBox>
                    <InputBox>
                      <AiOutlineMail size={26} fill='#b79950'/>
                      <Input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder='Digite o seu email'/>
                    </InputBox>
                    <InputBox>
                      <AiOutlineMessage size={26} fill='#b79950'/>
                      <InputArea value={message} onChange={e => setMessage(e.target.value)} type="text" placeholder='Digite o seu assunto'/>
                    </InputBox>
                    <InputBox>
                      <AiOutlineFileImage size={26} fill='#b79950'/>
                      <Input onChange={handleFileUpload} type="file" placeholder='Digite o seu assunto'/>
                    </InputBox>
                    <SendBtn onClick={() => sendForm()} type='submit' />
                  </div>
                    </>
                  )}
                  {formSended == true && (
                    <div style={{display: 'block'}}>
                      <AiFillCheckCircle size={100} fill={'var(--primary-color)'}/>
                      <h1 style={{fontSize: 22}}>Nossa equipe foi contatada com sucesso!</h1>
                      <h1 style={{fontSize: 18, marginTop: 10, fontWeight: 200, opacity: 0.8}}>Iremos responder você em seu email dentro de 1 dia útil, não se preocupe!</h1>

                      <button onClick={() => {
                        window.location.href = '/';
                      }} style={{cursor: 'pointer', marginTop: 10, background: 'none', border: 'none'}}>
                        <h1>Voltar para a tela inicial</h1>
                      </button>
                    </div>
                  )}
                </Column2>
              </ContatoRow>
            </ContatoWrapper>
        </ContatoContainer>
    </>
  )
}
