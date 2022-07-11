import { Container } from "./styles";
import { LinkWithArrow } from "../../link-with-arrow";

export const CompanyCard = ({ logo, description, link }) => {
  return (
    <Container>
      <img src={logo}></img>
      <p>{description}</p>

      <LinkWithArrow link={link} target="_blank">
        Conheça
      </LinkWithArrow>
    </Container>
  );
};
