import { Container, Image } from "./styles";

export const CardService = ({ image, text }) => {
  return (
    <Container>
      <Image backgroundImage={image} />
      <p>{text}</p>
    </Container>
  );
};
