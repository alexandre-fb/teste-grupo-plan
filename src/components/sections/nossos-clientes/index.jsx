import styled from "styled-components";

export const NossosClientesSection = () => {
  return (
    <Container id='nossos-clientes-section'>
      <div>NOSSOS CLIENTES</div>
    </Container>
  );
};

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #7a7a7a;
  color: black;
  display: grid;
  place-items: center;
`;
