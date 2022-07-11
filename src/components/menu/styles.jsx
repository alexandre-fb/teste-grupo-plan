import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 45px;

  li {
    cursor: pointer;
    font-size: 15px;
    text-transform: uppercase;

    display: flex;
    justify-content: start;
    align-items: center;

    transition: 300ms;

    & .active {
      transition: 300ms;
      font-weight: 300;
      color: var(--medium-gray);
    }

    &:hover {
      color: var(--light-gray);
    }
  }
`;

export const BackgroundNumber = styled.span`
  font-size: 60px;
  font-weight: 800;
  opacity: 0.05;
  position: absolute;
  z-index: -1;
`;
