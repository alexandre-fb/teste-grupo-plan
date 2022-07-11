import styled from "styled-components";

export const TitleAndBlogLinkContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 20px;
  flex-wrap: wrap;

  & > :last-child {
    position: relative;
    bottom: 12px;
  }
`;

export const ContainerNewsCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 40px 20px;
`;
