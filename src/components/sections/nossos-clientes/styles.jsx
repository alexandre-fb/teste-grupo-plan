import styled from "styled-components";
import { screenSizes } from "../../../styles/screen-sizes";
import { SectionContainer } from "../section-container";

export const Container = styled(SectionContainer)`
  display: grid;
  grid-template-columns: 2fr 3fr;
  align-items: center;

  @media (max-width: ${screenSizes.tablet}) {
    display: grid;
    grid-template-columns: 100%;
  }
`;

export const SectionTitleAndTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const LogosCustomersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  justify-content: space-between;

  img {
    max-width: 150px;
  }

  @media (max-width: ${screenSizes.smallLaptop}) {
    img {
      max-width: 120px;
    }
  }

  @media (max-width: ${screenSizes.tablet}) {
    grid-template-columns: 1fr 1fr;

    img {
      max-width: 150px;
    }
  }

  @media (max-width: ${screenSizes.mobile}) {
    grid-template-columns: 100%;
  }
`;
