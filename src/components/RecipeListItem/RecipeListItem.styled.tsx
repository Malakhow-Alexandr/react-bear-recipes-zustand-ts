import styled from "styled-components";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Item = styled.li`
  margin-left: auto;
  margin-right: auto;
  width: 262px;
  padding: 5px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.2);
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;

export const BeerPicture = styled(LazyLoadImage)`
  height: 220px;
  object-fit: contain;
`;
