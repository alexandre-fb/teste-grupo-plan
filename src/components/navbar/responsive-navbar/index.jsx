import { Container } from "./styles";
import { MobileNavBar } from "../mobile-navbar";
import { DefaultNavBar } from "../default-navbar";

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
