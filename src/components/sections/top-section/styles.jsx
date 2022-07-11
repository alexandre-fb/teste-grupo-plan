import styled from "styled-components";
import { screenSizes } from "../../../styles/screen-sizes";
import { SectionContainer } from "../section-container";

export const Container = styled(SectionContainer)`
  padding: 0;

  @media (max-width: ${screenSizes.smallLaptop}) {
    padding-top: 100px;
  }
`;
