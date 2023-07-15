import styled from "styled-components";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaStar } from "react-icons/fa";

export const Item = styled.li`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 262px;
  height: 275px;
  padding: 10px 5px 5px 5px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.2);
  transition: all 250ms ease;

  &:hover,
  &:focus {
    transform: scale(1.06);
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  display: flex;
  gap: 30px;
`;

export const CardTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;

export const BeerPicture = styled(LazyLoadImage)`
  height: 220px;
  object-fit: contain;
`;

export const MetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;

export const MetaInfo = styled.p`
  font-size: 14px;
  font-style: italic;
`;

export const MetaInfoTitle = styled.span`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 3px;
`;
export const FavoriteButton = styled.button`
  all: unset;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 225px;
  left: 220px;
  cursor: pointer;
  &:hover > svg {
    fill: red;
    transform: scale(1.1);
  }
  &:hover > span {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }
  &:active > svg {
    transform: rotate(40deg);
  }
`;
export const FavoriteStar = styled(FaStar)`
  fill: orange;
  width: 30px;
  height: 30px;
  transition: all 250ms ease;
`;
export const FavoriteText = styled.span`
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  position: absolute;
  left: -50px;
  top: 9px;
  color: red;
  transition: all 250ms ease;
`;
