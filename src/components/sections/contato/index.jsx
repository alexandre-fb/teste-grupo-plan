import {
  SectionTitleAndFormContainer,
  Container,
  ContactCardsContainer,
} from "./styles";
import { CompanyCard } from "../../cards/company-card";
import { LocationCard } from "../../cards/location-card";
import { SocialLinksCard } from "../../cards/social-links-card";
import { ContactForm } from "../../contact-form";
import { SectionContainer } from "../section-container";
import { SectionTitle } from "../section-title";

import logoPlanMkt from "../../../assets/images/logos-companys/plan-mkt.png";
import logoPlanXp from "../../../assets/images/logos-companys/plan-xp.png";
import logoFullUp from "../../../assets/images/logos-companys/full-up.png";

export const ContatoSection = () => {
  return (
    <SectionContainer id="contato">
      <Container>
        <SectionTitleAndFormContainer>
          <SectionTitle bigTitle="/Contato" backgroundNumber="05." />
          <p>
            Gostou de saber mais sobre as inovações tecnológicas e também quer
            oferecer novas experiências aos seus clientes? Então entre em
            contato e marque um encontro real conosco para conversamos sobre as
            infinitas possibilidades do mundo virtual.
          </p>
          <ContactForm />
        </SectionTitleAndFormContainer>
        <ContactCardsContainer>
          <SocialLinksCard />
          <LocationCard
            estado="RS"
            endereco="Rua Onze de Junho, 243"
            cidade="Novo Hamburgo"
            pais="Brasil"
            telefone="+55 51 98229.0400"
            linkGoogleMaps="https://goo.gl/maps/NNE8CZfv7W51RcbL7"
          />
          <LocationCard
            estado="SP"
            endereco="Rua Ibijaú, 355/Sala 1309"
            cidade="São Paulo"
            pais="Brasil"
            telefone="+55 11 98871.8556"
            linkGoogleMaps="https://goo.gl/maps/HNyb49SuW2vwFofU8"
          />
          <CompanyCard
            logo={logoPlanMkt}
            description="A Plan faz parte do Grupo Plan Marketing, um grupo de comunicação completo."
            link="https://www.planmkt.com.br/"
          />
          <CompanyCard
            logo={logoPlanXp}
            description="A Plan XP é especializada em realidade virtual, realidade aumentada e jogos."
            link="https://www.planxp.com.br/"
          />
          <CompanyCard
            logo={logoFullUp}
            description="A FullUp é uma agência especializada em branding, design e campanhas."
            link="https://www.planmkt.com.br/fullup"
          />
        </ContactCardsContainer>
      </Container>
    </SectionContainer>
  );
};
