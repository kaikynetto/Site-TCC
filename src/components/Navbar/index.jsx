import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
  NavBtn,
} from "./NavbarElements";
import Link from "next/link";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <Link href="/">
            <NavLogo onClick={toggleHome}>ARTEMIS</NavLogo>
          </Link>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
                <NavLinks
                  smooth
                  duration={50}
                  onClick={() =>  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                 })}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                  Home
                </NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks
                  smooth
                  to="features"
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                  Sobre nós
                </NavLinks>              
            </NavItem>

            <NavBtn>
              <NavBtnLink onClick={() => {
                // adicionar site da tasking
                window.location.href = 'http://www.google.com';
              }}>Tasking</NavBtnLink>
            </NavBtn>

          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;