import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import Navbar from "../src/components/Navbar"
import Welcome from "../src/components/Sections/Welcome/Welcome"
import Sidebar from "../src/components/Sidebar"
import Features from "../src/components/Sections/Features"
import Encontre from "../src/components/Sections/EncontreProfissionais"
import Footer from "../src/components/Sections/Footer"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Head>
        <title>Artemis</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Navbar toggle={toggle} />
      <Welcome/>
      <Features title="features"/>
      <Encontre/>
      <Footer/>
    </>
  )
}