import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrapper,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  ContactContainer,
  EmailInput,
  IconButton,
} from "./FooterElements";
import { MdEmail } from 'react-icons/md';
import { animateScroll as scroll } from "react-scroll";
import emailjs from "@emailjs/browser";

const Footer = () => {

  const [assunto, setAssunto] = useState("");

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const sendEmail = (e) => {
    var win = window.open(`mailto:taskingartemis@gmail.com?subject=${assunto || "Digite o seu assunto"}`, '_blank');
    win.focus();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLinksContainer>
            <FooterLinkWrapper>
              <FooterLinkItems>
                <FooterLinkTitle onClick={() => toggleHome()}>Home</FooterLinkTitle>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle onClick={() => scroll.scrollTo(625)}>Sobre nós</FooterLinkTitle>
              </FooterLinkItems>
            </FooterLinkWrapper>
          </FooterLinksContainer>
        </FooterWrapper>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo onClick={toggleHome} to="/">
              ARTEMIS
            </SocialLogo>
    <script src="https://smtpjs.com/v3/smtp.js"></script>


            <ContactContainer>
              <h1 style={{fontSize: 16}}>Entre em contato</h1>
              <div style={{display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                <EmailInput onChange={e => setAssunto(e.target.value)} value={assunto} placeholder="Digite o assunto" type="email"/>
                <IconButton onClick={() => sendEmail()}>
                  <MdEmail size={24} stroke="#b79950" fill="#b79950" color="#b79950"/>
                </IconButton>
              </div>

            </ContactContainer>
            {/* <WebsiteRights>
              Artemis &copy; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights> */}
            <SocialIcons>
              <div>
                <SocialIconLink href="https://instagram.com/usetasking" target="_blank" aria-label="Instagram">
                    <FaInstagram color="#b79950" />
                </SocialIconLink>
              </div>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterContainer>
    </>
  );
};

export default Footer;
