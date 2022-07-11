import styled from "styled-components";
import { MainContent } from "../../components/main-content";
import { ResponsiveNavbar } from "../../components/navbar/responsive-navbar";

export const HomePage = () => {
  return (
    <div>
      <Container>
        <ResponsiveNavbar />
        <MainContent />
      </Container>
    </div>
  );
};

export const Container = styled.div`
  display: flex;
`;
