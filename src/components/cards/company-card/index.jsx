import styled from "styled-components";
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

export const Container = styled.div`
  max-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  img {
    width: 80%;
    max-width: 100px;
  }
`;