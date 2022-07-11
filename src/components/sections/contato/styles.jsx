import styled from "styled-components";
import { screenSizes } from "../../../styles/screen-sizes";

export const SectionTitleAndFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 100px;

  @media (max-width: ${screenSizes.smallLaptop}) {
    grid-template-columns: 100%;
  }
`;

export const ContactCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  grid-template-rows: auto auto;
  grid-gap: 40px;

  @media (max-width: ${screenSizes.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
`;
