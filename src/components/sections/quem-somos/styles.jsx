import styled from "styled-components";
import { SectionContainer } from "../section-container";
import { screenSizes } from "../../../styles/screen-sizes";

export const Container = styled(SectionContainer)`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 0;

  @media (max-width: ${screenSizes.tablet}) {
    padding-top: 100px;
    grid-template-columns: 100%;
    row-gap: 80px;
  }
`;

export const TitleAndTextContainer = styled.div`
  padding: 0 40px;
`;

export const Img = styled.div`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  height: 100vh;
  width: 100%;

  @media (max-width: ${screenSizes.tablet}) {
    height: 400px;
  }
`;

