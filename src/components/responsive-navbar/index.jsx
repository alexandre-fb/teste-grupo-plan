import styled from "styled-components";
import { MobileNavBar } from "../mobile-navbar";
import { DefaultNavBar } from "../default-navbar";
import { screenSizes } from "../../styles/screen-sizes";

export const ResponsiveNavbar = () => {
  return (
    <Container>
      <header>
        <MobileNavBar />
      </header>
      <aside>
        <DefaultNavBar />
      </aside>
    </Container>
  );
};

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
