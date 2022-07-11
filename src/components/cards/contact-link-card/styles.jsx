import styled from "styled-components";

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

    color: var(--medium-gray);

    svg {
      font-size: 1rem;
      position: absolute;
    }

    :hover {
      color: var(--light-gray);
    }
  }
`;
