import styled from "styled-components";
import { FiArrowDownRight as ArrowIcon } from "react-icons/fi";

export const CompanyCard = ({ logo, description, link }) => {
  return (
    <Container>
      <img src={logo}></img>
      <p>{description}</p>

      <a href={link} target="_blank">
        Conheça
        <ArrowIcon />
      </a>
    </Container>
  );
};

export const Container = styled.div`
  max-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  img {
    width: 80%;
    max-width: 100px;
  }

  a {
    text-transform: uppercase;
    font-size: 13px;
    position: relative;
    cursor: pointer;
    color: var(--medium-gray);

    transition: 300ms;

    svg {
      font-size: 1rem;
      position: absolute;
    }

    :hover {
      color: var(--light-gray);
    }
  }
`;

// export const SocialLinksContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// export const IconLink = styled.a`
//   width: 40px;
//   height: 40px;
//   background-color: var(--medium-gray);
//   color: var(--very-dark-gray);

//   display: grid;
//   place-items: center;
//   border-radius: 100%;

//   svg {
//     font-size: 1.5rem;
//   }
// `;
