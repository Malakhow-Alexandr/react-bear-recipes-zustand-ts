import styled from "styled-components";
export const RecipeContainer = styled.section`
  display: flex;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Poster = styled.img`
  height: 580px;
  width: 255px;
  object-fit: contain;
  @media screen and (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }
`;
export const MetaContainer = styled.div`
  width: 700px;
  margin-left: auto;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 55%;
  }
`;
export const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 30px;
  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;
export const Subtitle = styled.p`
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 6px;
`;

export const SubtitleMeta = styled.span`
  font-weight: 400;
  font-size: 16px;
  font-style: italic;
`;

export const FoodPairingList = styled.ol`
  position: relative;
  margin: 0;
  margin-bottom: 6px;
  margin-left: auto;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 0px;
  }
  @media screen and(min-width:768px) {
    width: 375px;
  }
  &:before {
    content: "Pairing with food:";

    font-weight: bold;
    font-size: 17px;
    
  }
`;
