import React from 'react'
import Link from 'next/link';
import {
  Card,
  CardsWrapper,
  Column1,
  Column2,
  Heading,
  Heading2,
  HeroContainer,
  HeroRow,
  HeroWrapper,
  ImgWrap,
  Subtitle,
  TextWrapper,
  TitleSection,
  EncontreContainer,
  EncontreRow,
  EncontreWrapper
} from './EncontreElements'

export default function Encontre() {
  const professions = ['Designer', 'Programador', 'UI Writer', 'UX Writer', 'Contador', 'Tradutor'];

  return (
    <EncontreContainer>
      <EncontreWrapper>
        <EncontreRow>
          <Column1>
            <TextWrapper>
              <TitleSection>Tasking</TitleSection>
              <Heading>Encontre os profissionais que quiser</Heading>
              <Subtitle>Nossa subsidiária "Tasking" tem uma vasta opção de profissionais prontos para colaborar com seus projetos</Subtitle>
            </TextWrapper>
          </Column1>
          <Column2>
            <Heading2>Sugestão de profissionais</Heading2>
            <CardsWrapper>
              {professions.map((profession) => (
                <Link href={`http://localhost:3002/encontre?profissao=${profession}`} key={profession}>
                  <Card>{profession}</Card>
                </Link>
              ))}
            </CardsWrapper>
          </Column2>
        </EncontreRow>
      </EncontreWrapper>
    </EncontreContainer>
  )
}
