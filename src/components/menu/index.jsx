import { Container, BackgroundNumber } from "./styles";
import { Link } from "react-scroll";

export const Menu = ({ setMobileMenuIsOpen }) => {
  const menuItems = [
    { name: "/Quem Somos", id: "quem-somos", number: "01." },
    { name: "/O Que Fazemos", id: "o-que-fazemos", number: "02." },
    { name: "/Plan News", id: "plan-news", number: "03." },
    { name: "/Nossos Clientes", id: "nossos-clientes", number: "04." },
    { name: "/Contato", id: "contato", number: "05." },
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
              onClick={() => setMobileMenuIsOpen && setMobileMenuIsOpen(false)}
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
