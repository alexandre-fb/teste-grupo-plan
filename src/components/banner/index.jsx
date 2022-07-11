import {
  Container,
  ImageContainer,
  Image,
  Icon,
  DataContainer,
  Tag,
  Title,
} from "./styles";

import mobileIcon from "../../assets/images/icons/mobile-icon.png";
import { LinkWithArrow } from "../link-with-arrow";
import imageBanner from "../../assets/images/banner-images/banner-image.png";

export const Banner = () => {
  const data = {
    image: imageBanner,
    tag: "Cassilero del diablo",
    title: "Lorem ipsum dolor sit amet, consectetur adipi elit sed ibendum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum urna leo, at viverra ligula convallis sed. Phasellus fringilla sem sed eros convallis dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec condimentum convallis tortor et volutpat.",
  };

  return (
    <Container>
      <ImageContainer>
        <Image backgroundImage={data.image} />
        <Icon src={mobileIcon} />
      </ImageContainer>
      <DataContainer>
        <Tag>{data.tag}</Tag>
        <Title>{data.title}</Title>
        <p>{data.text}</p>
        <LinkWithArrow>Saiba Mais</LinkWithArrow>
      </DataContainer>
    </Container>
  );
};
