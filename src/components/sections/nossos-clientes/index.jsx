import styled from "styled-components";
import { SectionContainer } from "../section-container";
import { SectionTitle } from "../section-title";

import Cliente01 from "../../../assets/images/logos-clientes/cliente01.webp";
import Cliente02 from "../../../assets/images/logos-clientes/cliente02.webp";
import Cliente03 from "../../../assets/images/logos-clientes/cliente03.webp";
import Cliente04 from "../../../assets/images/logos-clientes/cliente04.webp";
import Cliente05 from "../../../assets/images/logos-clientes/cliente05.webp";
import Cliente06 from "../../../assets/images/logos-clientes/cliente06.webp";
import Cliente07 from "../../../assets/images/logos-clientes/cliente07.webp";
import Cliente08 from "../../../assets/images/logos-clientes/cliente08.webp";
import { screenSizes } from "../../../styles/screen-sizes";

export const NossosClientesSection = () => {
  const clientesImgs = [
    Cliente01,
    Cliente02,
    Cliente03,
    Cliente04,
    Cliente05,
    Cliente06,
    Cliente07,
    Cliente08,
  ];

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

export const Container = styled(SectionContainer)`
  display: grid;
  grid-template-columns: 2fr 3fr;
  align-items: center;

  @media (max-width: ${screenSizes.tablet}) {
    display: grid;
    grid-template-columns: 100%;
  }
`;

export const SectionTitleAndTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const LogosCustomersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  justify-content: space-between;

  img {
    max-width: 150px;
  }

  @media (max-width: ${screenSizes.smallLaptop}) {
    img {
      max-width: 120px;
    }
  }

  @media (max-width: ${screenSizes.tablet}) {
    grid-template-columns: 1fr 1fr;

    img {
      max-width: 150px;
    }
  }

  @media (max-width: ${screenSizes.mobile}) {
    grid-template-columns: 100%;
  }
`;
