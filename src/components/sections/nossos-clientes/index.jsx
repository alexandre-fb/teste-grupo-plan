import {
  Container,
  SectionTitleAndTextContainer,
  LogosCustomersContainer,
} from "./styles";

import { SectionTitle } from "../section-title";
import { clientesImgs } from "./custumersImages";

export const NossosClientesSection = () => {
  return (
    <Container id="nossos-clientes">
      <SectionTitleAndTextContainer>
        <SectionTitle bigTitle="/Nossos Clientes" backgroundNumber="04." />
        <p>
          O Grupo Plan Marketing ao longo dos seus 20 anos já desenvolveu mais
          de 3500 projetos sempre com comprometimento e prezado pela qualidade.
        </p>
      </SectionTitleAndTextContainer>
      <LogosCustomersContainer>
        {clientesImgs.map((item, index) => {
          return <img key={index} src={item} />;
        })}
      </LogosCustomersContainer>
    </Container>
  );
};
