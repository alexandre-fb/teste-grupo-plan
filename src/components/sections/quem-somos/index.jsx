import { Container, TitleAndTextContainer, Img } from "./styles";

import { SectionTitle } from "../section-title";
import quemSomosImage from "../../../assets/images/quem-somos.webp";

export const QuemSomosSection = () => {
  return (
    <Container id="quem-somos">
      <TitleAndTextContainer>
        <SectionTitle bigTitle="/Quem Somos" backgroundNumber="01." />
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
