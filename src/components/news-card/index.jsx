import styled from "styled-components";
import gameIcon from "../../assets/images/icons/game-icon.png";
import { FiArrowDownRight as ArrowIcon } from "react-icons/fi";

export const NewsCard = ({ image, positionImage, tag, title, text }) => {
  return (
    <Container>
      <ImageContainer>
        <Image backgroundImage={image} positionImage={positionImage}/>
        <Icon src={gameIcon} />
      </ImageContainer>
      <DataContainer>
        <Tag>{tag}</Tag>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <LinkMore>
          Saiba Mais
          <ArrowIcon />
        </LinkMore>
      </DataContainer>
    </Container>
  );
};

export const Container = styled.article`
  max-width: 350px;
  min-width: 200px;
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
`;

export const Text = styled.p`
  font-size: 13px;
  color: #fff;
`;

export const LinkMore = styled.a`
  display: flex;
  align-items: center;

  text-transform: uppercase;
  color: var(--medium-gray);

  cursor: pointer;

  svg {
    color: #fff;
    font-size: 1.2rem;
  }
`;
