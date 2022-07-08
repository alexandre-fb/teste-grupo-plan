import styled from "styled-components";
import { screenSizes } from "../../styles/screen-sizes";
import { Menu } from "../menu";

export const NavBar = () => {
  return (
    <Container>
      <Logo>Logo</Logo>
      <Menu />
      <ContactLink>Contact Link</ContactLink>
    </Container>
  );
};

export const Container = styled.nav`
  width: 20%;
  height: 100vh;
  background-color: red;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 20px;

  @media (max-width: ${screenSizes.smallLaptop}) {
    flex-direction: row;
    width: 100vw;
    height: 100px;
  }
`;

export const Logo = styled.div`
  width: 100%;
  height: 100px;
  background-color: yellow;
  color: black;

  display: grid;
  place-items: center;

  @media (max-width: ${screenSizes.smallLaptop}) {
    width: 100px;
    height: 80px;
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
