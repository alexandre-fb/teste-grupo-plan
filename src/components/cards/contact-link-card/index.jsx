import styled from "styled-components";
import { Link } from "react-scroll";
import { FiArrowDownRight as ArrowIcon } from "react-icons/fi";
import ControlIcon from "../../../assets/images/icons/control-icon.png";

export const ContactLinkCard = () => {
  return (
    <Container>
      <img src={ControlIcon} alt="controle game" />
      <h3>
        Experimente inovar com a <strong>PlanXP</strong> para{" "}
        <strong>desenvolver os seus jogos digitais!</strong>
      </h3>
      <Link to="contato" smooth spy duration={600}>
        Entre em contato agora mesmo
        <ArrowIcon />
      </Link>
    </Container>
  );
};

export const Container = styled.div`
  max-width: 160px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: start;

  img {
    width: 50px;
  }

  h3 {
    font-size: 20px;
    line-height: 1.2;

    strong {
      font-weight: 600;
    }
  }

  a {
    text-transform: uppercase;
    font-size: 12px;
    position: relative;
    cursor: pointer;

    transition: 300ms;

    svg {
      font-size: 1rem;
      position: absolute;
    }

    :hover {
      color: var(--medium-gray);
    }
  }
`;
