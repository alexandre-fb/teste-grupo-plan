import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { HiMenu as MenuMobileIcon } from "react-icons/hi";
import { AiOutlineClose as CloseMenuMobileIcon } from "react-icons/ai";
import { screenSizes } from "../../styles/screen-sizes";

export const Menu = () => {
  const [mobileMenuIsClicked, setMobileMenuIsClicked] = useState(false);
  console.log("mobileMenuIsClicked", mobileMenuIsClicked);

  const menuItems = [
    { name: "Quem Somos", id: "quem-somos", number: "01." },
    { name: "O Que Fazemos", id: "o-que-fazemos", number: "02." },
    { name: "Plan News", id: "plan-news", number: "03." },
    { name: "Nossos Clientes", id: "nossos-clientes", number: "04." },
    { name: "Contato", id: "contato", number: "05." },
  ];

  return (
    <Container>
      <IconResponsiveMenuArea
        onClick={() => setMobileMenuIsClicked(!mobileMenuIsClicked)}
      >
        {mobileMenuIsClicked ? <CloseMenuMobileIcon /> : <MenuMobileIcon />}
      </IconResponsiveMenuArea>
      <StyledMenu mobileMenuIsClicked={mobileMenuIsClicked}>
        {menuItems.map((item) => {
          return (
            <li key={item.id}>
              <Link
                onClick={() => setMobileMenuIsClicked(!mobileMenuIsClicked)}
                to={item.id}
                smooth={true}
                activeClass={"active"}
                spy={true}
                duration={1000}
              >
                {item.name}
              </Link>
              <BackgroundNumber>{item.number}</BackgroundNumber>
            </li>
          );
        })}
      </StyledMenu>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 45px;

  li {
    cursor: pointer;
    font-size: 15px;
    text-transform: uppercase;

    position: relative;

    display: flex;
    justify-content: start;
    align-items: center;

    & .active {
      font-weight: 300;
      color: #939598;
    }
  }

  @media (max-width: ${screenSizes.smallLaptop}) {
    display: ${({ mobileMenuIsClicked }) =>
      mobileMenuIsClicked ? "flex" : "none"};
    position: absolute;
    z-index: -2;
    top: 100px;
    left: 0;
    background-color: rgba(30, 30, 30, 0.9);
    width: 100vw;
    height: 100vh;
    padding: 50px;
  }
`;

export const BackgroundNumber = styled.span`
  font-size: 60px;
  font-weight: 800;
  opacity: 0.05;
  position: absolute;
  z-index: -1;
`;

export const IconResponsiveMenuArea = styled.div`
  display: none;
  padding: 5px;
  background-color: #939598;
  width: 40px;
  height: 40px;
  border-radius: 100%;

  svg {
    width: 100%;
    font-size: 2rem;
    color: #1e1e1e;
  }

  @media (max-width: ${screenSizes.smallLaptop}) {
    display: grid;
    place-items: center;
  }
`;
