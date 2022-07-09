import styled from "styled-components";
import { screenSizes } from "../../styles/screen-sizes";
import { Menu } from "../menu";
import logoImg from "../../assets/images/logo.png";
import { Link } from "react-scroll";

export const NavBar = () => {
  return (
    <Container>
      <LogoArea>
        <Link to={"quem-somos"} smooth={true} duration={1000}>
          <img src={logoImg} alt="Logo Plan XP" />
        </Link>
      </LogoArea>
      <Menu />
      <ContactLink>Contact Link</ContactLink>
    </Container>
  );
};

export const Container = styled.nav`
  width: 235px;
  height: 100vh;
  background-color: #1e1e1e;
  padding-top: 40px;

  position: sticky;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${screenSizes.smallLaptop}) {
    flex-direction: row;
    width: 100vw;
    height: 100px;

    padding: 0 40px;
  }
`;

export const LogoArea = styled.div`
  max-width: 150px;
  height: fit-content;

  img {
    width: 100%;
  }

  @media (max-width: ${screenSizes.smallLaptop}) {
    max-width: 100px;
  }
`;

export const ContactLink = styled.div`
  width: 100%;
  height: 100px;
  background-color: blue;

  display: grid;
  place-items: center;

  @media (max-width: ${screenSizes.smallLaptop}) {
    display: none;
  }
`;
