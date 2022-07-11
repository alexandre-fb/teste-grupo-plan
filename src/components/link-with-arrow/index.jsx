import { Container } from "./styles";
import { FiArrowDownRight as ArrowIcon } from "react-icons/fi";
import { Link } from "react-scroll";

export const LinkWithArrow = ({
  children,
  section,
  link,
  target,
  arrowSize,
}) => {
  return (
    <Container arrowSize={arrowSize}>
      {section ? (
        <Link to={section} smooth={true} spy={true} duration={600}>
          {children}
        </Link>
      ) : (
        <a href={link} target={target}>
          {children}
        </a>
      )}

      <ArrowIcon />
    </Container>
  );
};
