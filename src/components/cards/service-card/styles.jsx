import styled from "styled-components";

export const Container = styled.article`
  min-width: 100px;
  max-width: 250px;
`;

export const Image = styled.div`
  width: 100%;
  height: 150px;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;
