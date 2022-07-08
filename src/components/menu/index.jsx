import styled from "styled-components";
// import { NavHashLink as NavLink } from "react-router-hash-link";
import { Link } from "react-scroll";

export const Menu = () => {
  const menuItems = [
    { name: "Quem Somos", id: "quem-somos" },
    { name: "O Que Fazemos", id: "o-que-fazemos" },
    { name: "Plan News", id: "plan-news" },
    { name: "Nossos Clientes", id: "nossos-clientes" },
    { name: "Contato", id: "contato" },
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
              duration={1000}
            >
              {item.name}
            </Link>
          </li>
        );
      })}
    </Container>
  );
};

export const Container = styled.ul`
  li {
    cursor: pointer;

    & .active {
      font-weight: 600;
    }
  }
`;
