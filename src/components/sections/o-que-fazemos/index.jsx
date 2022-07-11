import styled from "styled-components";
import { CardService } from "../../cards/service-card";
import { ContactLinkCard } from "../../cards/contact-link-card";
import { SectionContainer } from "../section-container";
import { SectionTitle } from "../section-title";
import { cardsServicesData, sectionData } from "./sectionData";
import { screenSizes } from "../../../styles/screen-sizes";

export const OQueFazemosSection = () => {
  return (
    <SectionContainer id="o-que-fazemos">
      <Container>
        <TitleAndDataContainer>
          <SectionTitle
            smallTitle="/O que fazemos"
            bigTitle="/Games"
            backgroundNumber="02."
          />
          <ContainerData>
            <Title>{sectionData.title}</Title>
            <SubTitle>{sectionData.subTitle}</SubTitle>
            <p>{sectionData.text}</p>
          </ContainerData>
        </TitleAndDataContainer>

        <CardsServicesAndContactLinkContainer>
          {cardsServicesData.map((item, index) => {
            return (
              <CardService key={index} image={item.image} text={item.text} />
            );
          })}

          <ContactLinkCardArea>
            <ContactLinkCard />
          </ContactLinkCardArea>
        </CardsServicesAndContactLinkContainer>
      </Container>
    </SectionContainer>
  );
};

export const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 5fr;
  justify-content: space-between;
  grid-gap: 40px;

  @media (max-width: ${screenSizes.smallLaptop}) {
    grid-template-columns: 100%;
  } ;
`;

export const TitleAndDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContainerData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h2`
  font-size: 30px;
  color: var(--medium-gray);

  @media (max-width: ${screenSizes.mobile}) {
    font-size: 25px;
  } ;
`;

export const SubTitle = styled.h3`
  font-size: 16px;
  color: var(--medium-gray);
`;

export const CardsServicesAndContactLinkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-gap: 40px 20px;

  @media (max-width: ${screenSizes.mobile}) {
    grid-template-columns: 100%;
    justify-items: center;
  } ;
`;

export const ContactLinkCardArea = styled.div`
  align-self: center;
`;
