import styled from "styled-components";
import { BlogLink } from "../../blog-link";
import { NewsCard } from "../../news-card";
import { SectionContainer } from "../../section-container";
import { SectionTitle } from "../../section-title";
import { newsData } from "./newsData";

export const PlanNewsSection = () => {
  return (
    <SectionContainer id="plan-news">
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
    </SectionContainer>
  );
};

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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 40px 20px;
`;
