import styled from "styled-components";
import { NewsCard } from "../../news-card";
import { newsData } from "./newsData";

export const PlanNewsSection = () => {
  return (
    <Container id="plan-news">
      <ContainerNewsCards>
      {newsData.map((item, index) => {
        return (
          <NewsCard
            key={index}
            image={item.image}
            positionImage={item.positionImage}
            tag={item.tag}
            title={item.title}
            text={item.text}
          />
        );
      })}
      </ContainerNewsCards>
    </Container>
  );
};

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: var(--very-dark-gray);
  padding: 150px 50px;
`;

export const ContainerNewsCards = styled.div`
width: 100%;
height: 100%;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

column-gap: 20px;
row-gap: 40px;
justify-content: space-between;
`
