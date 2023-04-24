import React from "react"
import { FooterCardInstagram, FooterCardTwitter, FooterContainer, FooterWrapper, Heading } from "./FooterElements"
import Link from "next/link"

export default function Footer() {
  return (
    <>
        <FooterContainer>
            <FooterWrapper>
                <Link href={"https://twitter.com/kubbent"} target="_blank">
                    <FooterCardTwitter>
                        <Heading>Twitter</Heading>
                    </FooterCardTwitter>
                </Link>
                <Link href={"https://instagram.com/kubbent"} target="_blank">
                    <FooterCardInstagram>
                        <Heading>Instagram</Heading>
                    </FooterCardInstagram>
                </Link>
            </FooterWrapper>
        </FooterContainer>
    </>
  )
}
