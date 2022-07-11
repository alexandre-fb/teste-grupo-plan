import styled from "styled-components";
import gameIcon from "../../../assets/images/icons/game-icon.png";
import { LinkWithArrow } from "../../link-with-arrow";

export const NewsCard = ({ image, positionImage, tag, title, text }) => {
  return (
    <Container>
      <ImageContainer>
        <Image backgroundImage={image} positionImage={positionImage} />
        <Icon src={gameIcon} />
      </ImageContainer>
      <DataContainer>
        <Tag>{tag}</Tag>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <LinkWithArrow>Saiba Mais</LinkWithArrow>
      </DataContainer>
    </Container>
  );
};

export const Container = styled.article`
  background-color: #292929;
`;

export const ImageContainer = styled.div`
  background-color: var(--very-dark-gray);
  position: relative;
`;

export const Image = styled.div`
  height: 178px;
  clip-path: polygon(0 0, 75% 0, 100% 40%, 100% 100%, 0 100%);
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: ${({ positionImage }) => positionImage};
`;

export const Icon = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

export const DataContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Tag = styled.span`
  background-color: var(--medium-gray);
  color: var(--very-dark-gray);
  padding: 2px 5px;
  width: fit-content;
`;

export const Title = styled.h2`
  font-size: 20px;
  color: var(--medium-gray);

  transition: 200ms;

  :hover {
    color: var(--light-gray);
  }
`;

export const Text = styled.p`
  font-size: 13px;
  color: #fff;
`;
