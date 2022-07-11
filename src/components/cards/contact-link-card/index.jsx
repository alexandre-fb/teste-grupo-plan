import { Container } from "./styles";
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
