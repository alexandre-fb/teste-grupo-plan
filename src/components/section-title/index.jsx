import styled from "styled-components";

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

export const Container = styled.div`
  position: relative;
  display: grid;
  align-items: center;
`;

export const SmallTitle = styled.h3`
  font-size: 16px;
`;

export const BigTitle = styled.h2`
  font-size: 43px;
  color: var(--medium-gray);
`;
export const BackgroundNumber = styled.span`
  font-size: 116px;
  font-weight: bold;
  opacity: 0.05;
  position: absolute;
`;
