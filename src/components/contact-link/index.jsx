import styled from "styled-components";
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

export const Container = styled.div`
  width: 100%;
  height: 150px;

  position: relative;
  display: grid;
  place-items: center;

  svg {
    position: absolute;
    right: 5px;
    bottom: 5px;
    font-size: 1.2rem;
    color: var(--medium-gray);
  }

  a {
    cursor: pointer;
  }
`;

export const ContainerText = styled.div`
  position: relative;
  display: flex;

  p {
    font-size: 20px;
    color: var(--medium-gray);
    max-width: 143px;
  }

  span {
    font-size: 60px;
    font-weight: 800;
    opacity: 0.05;
    position: absolute;
    z-index: -1;
    bottom: -9px;
  }
`;
