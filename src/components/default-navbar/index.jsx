import styled from "styled-components";
import { Menu } from "../menu";
import { Link } from "react-scroll";
import { ContactLink } from "../contact-link";
import logoImg from "../../assets/images/logo.png";

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

export const Container = styled.nav`
  width: ${({ responsive }) => (responsive ? "100vw" : "235px;")};
  height: 100vh;
  background-color: var(--very-dark-gray);
  opacity: ${({ responsive }) => responsive && ".98"};
  padding-top: ${({ responsive }) => (responsive ? "150px" : "40px")};

  position: sticky;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${({ responsive }) => (responsive ? "end" : "center")};

  padding-right: ${({ responsive }) => responsive && "40px"};

  border-right: 2px solid var(--dark-gray);
`;

export const LogoArea = styled.div`
  max-width: 150px;
  height: fit-content;
  cursor: pointer;
  display: ${({ responsive }) => responsive && "none"};

  img {
    width: 100%;
  }
`;

export const ContactLinkArea = styled.div`
  width: ${({ responsive }) => (responsive ? "150px" : "100%")};
  border-top: 2px solid var(--dark-gray);
`;
