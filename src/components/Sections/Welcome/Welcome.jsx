import React from 'react'
import { Column1, Column2, Heading, HeroContainer, HeroRow, HeroWrapper, ImgWrap, Subtitle, TextWrapper } from './WelcomeElements'
import img from "../../../../public/imgs/heroImage.png"
import Image from 'next/image'

export default function Welcome() {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroRow>
          <Column1>
            <TextWrapper>
              <Heading>A flecha dourada dos freelancers</Heading>
              <Subtitle>A holding líder em tecnologia por trás do aplicativo Tasking conectando talentos ao sucesso.</Subtitle>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Image width="200px" height="450px" src={img}/>
            </ImgWrap>
          </Column2>
        </HeroRow>
      </HeroWrapper>
    </HeroContainer>
  )
}
