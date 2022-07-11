import styled from "styled-components";
import mobileIcon from "../../assets/images/icons/mobile-icon.png";
import { LinkWithArrow } from "../link-with-arrow";

import imageBanner from "../../assets/images/banner-images/banner-image.png";
import { screenSizes } from "../../styles/screen-sizes";

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

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${screenSizes.tablet}) {
    grid-template-columns: 100%;
  }
`;

export const ImageContainer = styled.div`
  background-color: var(--very-dark-gray);
  position: relative;
  width: 100%;
`;

export const Image = styled.div`
  height: 100vh;

  clip-path: polygon(0 0, 80% 0, 100% 15%, 100% 100%, 0 100%);
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-position: left;
  background-size: cover;

  @media (max-width: ${screenSizes.tablet}) {
    height: 400px;
    clip-path: polygon(0 0, 80% 0, 100% 30%, 100% 100%, 0 100%);
  }
`;

export const Icon = styled.img`
  position: absolute;
  top: 1%;
  right: 0;
  width: 50px;

  @media (max-width: ${screenSizes.smallLaptop}) {
    width: 40px;
  }
`;

export const DataContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  padding: 80px;
`;

export const Tag = styled.span`
  background-color: var(--medium-gray);
  color: var(--very-dark-gray);
  padding: 2px 5px;
  width: fit-content;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  font-size: 30px;
  color: var(--medium-gray);

  transition: 200ms;

  :hover {
    color: var(--light-gray);
  }

  @media (max-width: ${screenSizes.smallLaptop}) {
    font-size: 24px;
  }
`;
