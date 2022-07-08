import styled from "styled-components";
import { ContatoSection } from "../sections/contato";
import { NossosClientesSection } from "../sections/nossos-clientes";
import { OQueFazemosSection } from "../sections/o-que-fazemos";
import { PlanNewsSection } from "../sections/plan-news";
import { QuemSomosSection } from "../sections/quem-somos";

export const MainContent = () => {
  return (
    <Container>
      <QuemSomosSection />
      <OQueFazemosSection />
      <PlanNewsSection />
      <NossosClientesSection />
      <ContatoSection />
    </Container>
  );
};

export const Container = styled.main`
  width: 100%;
  height: fit-content;
  background-color: green;

  /* div {
    width: 100%;
    height: 100vh;

    display: grid;
    place-items: center;
  } */
`;
