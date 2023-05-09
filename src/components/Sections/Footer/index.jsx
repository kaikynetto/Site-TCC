import React from "react";
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
} from "./FooterElements";

import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
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
            <WebsiteRights>
              Artemis &copy; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <div>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                    <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
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
