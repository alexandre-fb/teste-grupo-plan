import styled from "styled-components";
import {
  GrFacebookOption as FacebookIcon,
  GrInstagram as InstagramIcon,
  GrYoutube as YoutubeIcon,
} from "react-icons/gr";

export const SocialLinksCard = () => {
  const iconsData = [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/planmkt",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/planmkt/",
    },
    {
      icon: <YoutubeIcon />,
      link: "https://www.youtube.com/user/planmkt",
    },
  ];

  return (
    <Container>
      <h2>Siga-nos</h2>
      <p>
        Fique sempre por dentro de todas as novidades da Plan XP e de todas
        empresas do Grupo Plan Marketing.
      </p>
      <SocialLinksContainer>
        {iconsData.map((item, index) => {
          return (
            <IconLink key={index} href={item.link} target="_blank">
              {item.icon}
            </IconLink>
          );
        })}
      </SocialLinksContainer>
    </Container>
  );
};

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
  width: 30px;
  height: 30px;
  background-color: var(--medium-gray);
  color: var(--very-dark-gray);

  display: grid;
  place-items: center;
  border-radius: 100%;

  svg {
    font-size: 1.3rem;
  }
`;
