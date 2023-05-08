import React from 'react'
import { FeaturesCard, FeaturesContainer, FeaturesDescription, FeaturesTitle, FeaturesWrapper } from './FeaturesElements'
import { FiBriefcase, FiUsers } from 'react-icons/fi';
import { MdOutlineDesignServices } from 'react-icons/md';

export default function Features() {
  return (
    <>
        <FeaturesContainer id='features'>
            <FeaturesWrapper>
                <FeaturesCard>
                    <MdOutlineDesignServices size={60}/>
                    {/* <FeaturesTitle>Profissionais</FeaturesTitle> */}
                    <FeaturesDescription>Venda seus serviços com segurança.</FeaturesDescription>
                </FeaturesCard>
                <FeaturesCard>
                    <FiUsers size={60}/>
                    {/* <FeaturesTitle>Profissionais</FeaturesTitle> */}
                    <FeaturesDescription>Ache profissionais para o seu projeto.</FeaturesDescription>
                </FeaturesCard>
                <FeaturesCard onClick={() => console}>
                    <FiBriefcase size={60}/>
                    {/* <FeaturesTitle>Profissionais</FeaturesTitle> */}
                    <FeaturesDescription>Descubra um pouco sobre a Artemis.</FeaturesDescription>
                </FeaturesCard>
            </FeaturesWrapper>
        </FeaturesContainer>
    </>
  )
}
