import Link from "next/link";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarBtn,
  SidebarBtnLink,
} from "./SidebarElements";

function Sidebar({ toggle, isOpen }) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon color="#6059f7"/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <Link href={"/"}>
            <SidebarLink
              to="/"
              onClick={toggle}
              smooth
              duration={500}
              spy={true}
              // exact="true"
              offset={-80}
            >
              Home
            </SidebarLink>
          </Link>
          <SidebarLink
              to="features"
              onClick={toggle}
              smooth
              duration={500}
              spy={true}
              // exact="true"
              offset={-80}
            >
              Sobre nós
            </SidebarLink>
            <Link href={"/contato"}>
            <SidebarLink
              onClick={toggle}
              smooth
              duration={500}
              spy={true}
              // exact="true"
              offset={-80}
            >
              Contato
            </SidebarLink>
          </Link>

        </SidebarMenu>
            <SidebarBtn>
              <SidebarBtnLink onClick={() => {
                // adicionar site da tasking
                window.location.href = 'http://www.google.com';
              }}>Tasking</SidebarBtnLink>
            </SidebarBtn>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;