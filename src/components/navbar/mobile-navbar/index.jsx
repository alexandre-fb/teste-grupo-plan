import { useState } from "react";
import {
  Container,
  LogoArea,
  IconResponsiveMenuArea,
  NavBarArea,
} from "./styles";
import logoImg from "../../../assets/images/logo.png";
import { Link } from "react-scroll";
import { HiMenu as MenuMobileIcon } from "react-icons/hi";
import { AiOutlineClose as CloseMenuMobileIcon } from "react-icons/ai";
import { DefaultNavBar } from "../default-navbar";

export const MobileNavBar = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <Container>
      <LogoArea>
        <Link to={"top-section"} smooth={true} duration={600}>
          <img src={logoImg} alt="Logo Plan XP" />
        </Link>
      </LogoArea>

      <IconResponsiveMenuArea
        onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
      >
        {mobileMenuIsOpen ? <CloseMenuMobileIcon /> : <MenuMobileIcon />}
      </IconResponsiveMenuArea>

      <NavBarArea
        mobileMenuIsOpen={mobileMenuIsOpen}
        onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
      >
        <DefaultNavBar responsive setMobileMenuIsOpen={setMobileMenuIsOpen} />
      </NavBarArea>
    </Container>
  );
};
