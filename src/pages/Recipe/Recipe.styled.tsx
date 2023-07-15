import styled from "styled-components";
export const RecipeContainer = styled.section`
  display: flex;
`;
export const Poster = styled.img`
  height: 580px;
  width: 255px;
  object-fit: contain;
`;
export const MetaContainer = styled.div`
  width: 700px;
  margin-left: auto;
`;
export const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 30px;
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
  width: 575px;
  margin:0;
  margin-top: 20px;
  margin-left: auto;
  &:before {
    content: "Pairing with food:";
    position: absolute;
    top: -15px;
    left: -125px;
    font-weight: bold;
    font-size: 17px;
  }
`;
