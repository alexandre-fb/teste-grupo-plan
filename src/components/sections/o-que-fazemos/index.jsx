import {
  Container,
  TitleAndDataContainer,
  ContainerData,
  Title,
  SubTitle,
  CardsServicesAndContactLinkContainer,
  ContactLinkCardArea,
} from "./styles";
import { CardService } from "../../cards/service-card";
import { ContactLinkCard } from "../../cards/contact-link-card";
import { SectionContainer } from "../section-container";
import { SectionTitle } from "../section-title";
import { cardsServicesData, sectionData } from "./sectionData";

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
