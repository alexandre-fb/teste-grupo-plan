import {
  Container,
  ImageContainer,
  Image,
  Icon,
  DataContainer,
  Tag,
  Title,
  Text,
} from "./styles";
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
