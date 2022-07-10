import styled from "styled-components";
import { FiArrowDownRight as ArrowIcon } from "react-icons/fi";

export const BlogLink = () => {
  return (
    <Container>
      <a>clique aqui para ver todo o blog</a>
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

    :hover {
      color: var(--medium-gray);
    }
  }

  svg {
    font-size: 1rem;
  }
`;
