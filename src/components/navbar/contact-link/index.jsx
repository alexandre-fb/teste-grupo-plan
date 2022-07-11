import { Container, ContainerText } from "./styles";
import { FiArrowDownRight as ArrowIcon } from "react-icons/fi";
import { Link } from "react-scroll";

export const ContactLink = ({ setMobileMenuIsOpen }) => {
  return (
    <Container>
      <Link
        to="contato"
        smooth={true}
        activeClass={"active"}
        spy={true}
        duration={600}
        onClick={() => setMobileMenuIsOpen && setMobileMenuIsOpen(false)}
      >
        <ContainerText>
          <p>Que tal inovar com a gente?</p>
          <span>;)</span>
        </ContainerText>
        <ArrowIcon />
      </Link>
    </Container>
  );
};
