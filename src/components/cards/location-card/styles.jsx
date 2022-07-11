import styled from "styled-components";

export const Container = styled.div`
  max-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
    font-size: 20px;
    color: var(--medium-gray);
  }
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconLink = styled.a`
  width: 40px;
  height: 40px;
  background-color: var(--medium-gray);
  color: var(--very-dark-gray);

  display: grid;
  place-items: center;
  border-radius: 100%;

  svg {
    font-size: 1.5rem;
  }
`;
