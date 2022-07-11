import styled from "styled-components";

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
