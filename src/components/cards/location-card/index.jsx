import { Container, SocialLinksContainer, IconLink } from "./styles";
import { MdLocationOn as LocalIcon } from "react-icons/md";
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
