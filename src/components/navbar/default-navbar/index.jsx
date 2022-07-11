import { Container, LogoArea, ContactLinkArea } from "./styles";

import { Menu } from "../../menu";
import { Link } from "react-scroll";
import { ContactLink } from "../contact-link";
import logoImg from "../../../assets/images/logo.png";

export const DefaultNavBar = ({ responsive, setMobileMenuIsOpen }) => {
  return (
    <Container responsive={responsive}>
      <LogoArea responsive={responsive}>
        <Link to={"top-section"} smooth={true} duration={600}>
          <img src={logoImg} alt="Logo Plan XP" />
        </Link>
      </LogoArea>

      <Menu setMobileMenuIsOpen={setMobileMenuIsOpen} />

      <ContactLinkArea responsive={responsive}>
        <ContactLink setMobileMenuIsOpen={setMobileMenuIsOpen} />
      </ContactLinkArea>
    </Container>
  );
};
