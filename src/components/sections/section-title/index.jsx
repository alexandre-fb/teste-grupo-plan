import { Container, SmallTitle, BigTitle, BackgroundNumber } from "./styles";

export const SectionTitle = ({ smallTitle, bigTitle, backgroundNumber }) => {
  return (
    <Container>
      <div>
        <SmallTitle>{smallTitle}</SmallTitle>
        <BigTitle>{bigTitle}</BigTitle>
      </div>
      <BackgroundNumber>{backgroundNumber}</BackgroundNumber>
    </Container>
  );
};
