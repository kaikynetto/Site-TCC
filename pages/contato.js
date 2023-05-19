import React, { useState } from 'react'
import { ContatoContainer, ContatoForm, Input, InputMsg, SendBtn } from '../src/components/Contato/ContatoElements'

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
            <ContatoForm>
                <h1 style={{fontSize: 18, textAlign: 'center', color: 'red'}}>{error}</h1>
                <Input value={name} onChange={e => setName(e.target.value)} placeholder='Seu nome'/>
                <Input value={email} onChange={e => setEmail(e.target.value)} placeholder='Seu email'/>
                <InputMsg value={message} onChange={e => setMessage(e.target.value)} multiple placeholder='Digite aqui sua mensagem'/>
                <SendBtn onClick={() => sendForm()} type='submit' value={"Enviar"}>Enviar</SendBtn>
            </ContatoForm>
        </ContatoContainer>
    </>
  )
}
