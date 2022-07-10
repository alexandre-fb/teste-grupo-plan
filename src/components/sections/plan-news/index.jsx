import styled from "styled-components";
import { BlogLink } from "../../blog-link";
import { NewsCard } from "../../news-card";
import { SectionTitle } from "../../section-title";
import { newsData } from "./newsData";

export const PlanNewsSection = () => {
  return (
    <Container id="plan-news">
      <TitleAndBlogLinkContainer>
        <SectionTitle
          smallTitle="/Plan news"
          bigTitle="/Case Games"
          backgroundNumber="03."
        />
        <BlogLink />
      </TitleAndBlogLinkContainer>

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

  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
`;

export const TitleAndBlogLinkContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 20px;
  flex-wrap: wrap;

  & > :last-child {
    position: relative;
    bottom: 12px;
  }
`;

export const ContainerNewsCards = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  column-gap: 20px;
  row-gap: 40px;
  justify-content: space-between;
`;
