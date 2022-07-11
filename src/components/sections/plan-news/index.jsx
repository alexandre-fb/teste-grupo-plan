import { TitleAndBlogLinkContainer, ContainerNewsCards } from "./styles";
import { LinkWithArrow } from "../../link-with-arrow";
import { NewsCard } from "../../cards/news-card";
import { SectionContainer } from "../section-container";
import { SectionTitle } from "../section-title";
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
        <LinkWithArrow link="">clique aqui para ver todo o blog</LinkWithArrow>
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
