import { FC, useRef } from "react";
import { useLocation } from "react-router-dom";
import useStore from "store/store";
import RecipesList from "components/RecipesList/RecipesList";
import BackLink from "components/BackLink/BackLink";
import NothingInFavorite from "../../images/NothingInFavorite.jpg";

const FavoriteRecipes: FC = () => {
  const favoriteBeerRecipe = useStore((state) => state.favoriteBeerRecipes);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/");
  return (
    <>
      <BackLink to={backLinkLocationRef.current}></BackLink>
      {favoriteBeerRecipe.length === 0 ? (
        <img
          src={NothingInFavorite}
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
          alt="NotningInFavorite"
        />
      ) : (
        <RecipesList recipes={favoriteBeerRecipe} location={location} />
      )}
    </>
  );
};

export default FavoriteRecipes;
