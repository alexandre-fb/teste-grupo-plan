import styled from "styled-components";
import { MdLocationOn as LocalIcon } from "react-icons/md";
import { FiArrowDownRight as ArrowIcon } from "react-icons/fi";
import { LinkWithArrow } from "../../link-with-arrow";

export const LocationCard = ({
  estado,
  endereco,
  cidade,
  pais,
  telefone,
  linkGoogleMaps,
}) => {
  return (
    <Container>
      <h2>
        <LocalIcon />/{estado}
      </h2>
      <p>
        {endereco}
        <br />
        {cidade}/{estado},
        <br />
        {pais}
        <br />
        {telefone}
      </p>

      <LinkWithArrow link={linkGoogleMaps} target="_blank">
        ver no google maps
      </LinkWithArrow>
    </Container>
  );
};

export const Container = styled.div`
  max-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
    font-size: 20px;
    color: var(--medium-gray);
  }
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconLink = styled.a`
  width: 40px;
  height: 40px;
  background-color: var(--medium-gray);
  color: var(--very-dark-gray);

  display: grid;
  place-items: center;
  border-radius: 100%;

  svg {
    font-size: 1.5rem;
  }
`;
