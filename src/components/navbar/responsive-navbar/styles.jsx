import styled from "styled-components";
import { screenSizes } from "../../../styles/screen-sizes";

export const Container = styled.div`
  header {
    display: none;

    @media (max-width: ${screenSizes.smallLaptop}) {
      display: flex;
    }
  }

  aside {
    position: sticky;
    top: 0;

    @media (max-width: ${screenSizes.smallLaptop}) {
      display: none;
    }
  }
`;
