import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100px;
  background-color: var(--very-dark-gray);
  position: fixed;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 40px;

  z-index: 99;
`;

export const LogoArea = styled.div`
  max-width: 100px;
  height: fit-content;
  cursor: pointer;

  img {
    width: 100%;
  }
`;

export const IconResponsiveMenuArea = styled.div`
  padding: 5px;
  background-color: var(--medium-gray);
  width: 40px;
  height: 40px;
  border-radius: 100%;

  svg {
    width: 100%;
    font-size: 2rem;
    color: var(--very-dark-gray);
  }
`;

export const NavBarArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transition: 400ms ease-in-out;
  transform: translateX(
    ${({ mobileMenuIsOpen }) => (mobileMenuIsOpen ? "" : "100%")}
  );

  z-index: -5;
`;
