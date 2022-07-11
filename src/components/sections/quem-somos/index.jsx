import styled from "styled-components";
import { SectionContainer } from "../section-container";
import { SectionTitle } from "../section-title";
import quemSomosImage from "../../../assets/images/quem-somos.webp";
import { screenSizes } from "../../../styles/screen-sizes";

export const QuemSomosSection = () => {
  return (
    <Container id="quem-somos">
      <TitleAndTextContainer>
        <SectionTitle bigTitle="Quem Somos" backgroundNumber="/01." />
        <p>
          Tecnologias como a Realidade Virtual, a Realidade Aumentada, a
          Realidade Mixada, os vídeos 360º, os ambientes em 3D, já estão
          inseridos em nossas vidas, auxiliando em diversas áreas importantes,
          como a Educação, a Saúde e a Segurança. É a verdadeira revolução da
          Internet das Coisas. E a PlanXP, o braço tecnológico do Grupo Plan
          Marketing, está preparada para todas essas mudanças, desenvolvendo
          conteúdos imersivos que trazem mais dinamismo para o seu negócio
        </p>
      </TitleAndTextContainer>
      <Img backgroundImage={quemSomosImage}></Img>
    </Container>
  );
};

export const Container = styled(SectionContainer)`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 0;

  @media (max-width: ${screenSizes.tablet}) {
    padding-top: 100px;
    grid-template-columns: 100%;
    row-gap: 80px;
  }
`;

export const TitleAndTextContainer = styled.div`
  padding: 0 40px;
`;

export const Img = styled.div`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  height: 100vh;
  width: 100%;

  @media (max-width: ${screenSizes.tablet}) {
    height: 400px;
  }
`;
