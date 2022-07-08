import styled from "styled-components";
import { MainContent } from "../../components/main-content";
import { NavBar } from "../../components/navbar";
import { screenSizes } from "../../styles/screen-sizes";

export const HomePage = () => {
  return (
    <Container>
      <NavBar />
      <MainContent />
    </Container>
  );
};

export const Container = styled.div`
  display: flex;

  @media (max-width: ${screenSizes.smallLaptop}) {
    flex-direction: column;
  }
`;


