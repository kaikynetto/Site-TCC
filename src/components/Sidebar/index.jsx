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
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;