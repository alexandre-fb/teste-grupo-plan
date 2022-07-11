import { Container, SocialLinksContainer, IconLink } from "./styles";
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
