import { Container } from "./styles";
import { ContatoSection } from "../sections/contato";
import { NossosClientesSection } from "../sections/nossos-clientes";
import { OQueFazemosSection } from "../sections/o-que-fazemos";
import { PlanNewsSection } from "../sections/plan-news";
import { QuemSomosSection } from "../sections/quem-somos";
import { TopSection } from "../sections/top-section";

export const MainContent = () => {
  return (
    <Container>
      <TopSection />
      <QuemSomosSection />
      <OQueFazemosSection />
      <PlanNewsSection />
      <NossosClientesSection />
      <ContatoSection />
    </Container>
  );
};
