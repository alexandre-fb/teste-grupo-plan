import styled from "styled-components";

export const Container = styled.nav`
  width: ${({ responsive }) => (responsive ? "100vw" : "235px;")};
  height: 100vh;
  background-color: var(--very-dark-gray);
  opacity: ${({ responsive }) => responsive && ".98"};
  padding-top: ${({ responsive }) => (responsive ? "100px" : "40px")};

  position: sticky;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${({ responsive }) => (responsive ? "end" : "center")};

  padding-right: ${({ responsive }) => responsive && "40px"};

  border-right: 2px solid var(--dark-gray);
`;

export const LogoArea = styled.div`
  max-width: 150px;
  height: fit-content;
  cursor: pointer;
  display: ${({ responsive }) => responsive && "none"};

  img {
    width: 100%;
  }
`;

export const ContactLinkArea = styled.div`
  width: ${({ responsive }) => (responsive ? "150px" : "100%")};
  border-top: 2px solid var(--dark-gray);
`;
