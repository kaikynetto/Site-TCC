import React from 'react'
import { Card, CardsWrapper, Column1, Column2, Heading, Heading2, HeroContainer, HeroRow, HeroWrapper, ImgWrap, Subtitle, TextWrapper, TitleSection } from './EncontreElements'
import img from "../../../../public/imgs/heroImage.png"
import Image from 'next/image'
import { EncontreContainer } from './EncontreElements'
import { EncontreRow } from './EncontreElements'
import { EncontreWrapper } from './EncontreElements'

export default function Encontre() {
  return (
    <EncontreContainer>
        <EncontreWrapper>
            <EncontreRow>
                <Column1>
                    <TextWrapper>
                        <TitleSection>Tasking</TitleSection>
                        <Heading>Encontre os profissionais que quiser</Heading>
                        <Subtitle>Nossa subsidiaria "Tasking" tem uma vasta opções de profissionais prontos para colaborar com seus projetos</Subtitle>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <Heading2>Sugestão de profissionais</Heading2>
                    <CardsWrapper>
                        <Card>Designer</Card>
                        <Card>Programador</Card>
                        <Card>UI Writer</Card>
                        <Card>UX Writer</Card>
                        <Card>Contador</Card>
                        <Card>Tradutor</Card>
                    </CardsWrapper>
                </Column2>
            </EncontreRow>
        </EncontreWrapper>
    </EncontreContainer>
  )
}
