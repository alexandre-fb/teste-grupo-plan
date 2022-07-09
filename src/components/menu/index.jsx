import styled from "styled-components";
import { Link } from "react-scroll";
import { screenSizes } from "../../styles/screen-sizes";

export const Menu = ({ setMobileMenuIsOpen }) => {
  const menuItems = [
    { name: "Quem Somos", id: "quem-somos", number: "01." },
    { name: "O Que Fazemos", id: "o-que-fazemos", number: "02." },
    { name: "Plan News", id: "plan-news", number: "03." },
    { name: "Nossos Clientes", id: "nossos-clientes", number: "04." },
    { name: "Contato", id: "contato", number: "05." },
  ];

  return (
    <Container>
      {menuItems.map((item) => {
        return (
          <li key={item.id}>
            <Link
              to={item.id}
              smooth={true}
              activeClass={"active"}
              spy={true}
              duration={600}
              onClick={() =>
                setMobileMenuIsOpen && setMobileMenuIsOpen(false)
              }
            >
              {item.name}
            </Link>
            <BackgroundNumber>{item.number}</BackgroundNumber>
          </li>
        );
      })}
    </Container>
  );
};

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
