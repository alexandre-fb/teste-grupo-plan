import styled from "styled-components";
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
      {link ? (
        <a href={link} target={target}>
          {children}
        </a>
      ) : (
        <Link to={section} smooth={true} spy={true} duration={600}>
          {children}
        </Link>
      )}

      <ArrowIcon />
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  align-items: center;

  a {
    font-size: 12px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 200ms;

    color: var(--medium-gray);

    :hover {
      color: var(--light-gray);
    }
  }

  svg {
    font-size: ${({ arrowSize }) => (arrowSize ? arrowSize : "1rem")};
  }
`;
