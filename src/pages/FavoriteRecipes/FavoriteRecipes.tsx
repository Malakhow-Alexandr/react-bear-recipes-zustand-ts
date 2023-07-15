import { FC, useRef } from "react";
import { useLocation } from "react-router-dom";
import useStore from "store/store";
import RecipesList from "components/RecipesList/RecipesList";
import BackLink from "components/BackLink/BackLink";

const FavoriteRecipes: FC = () => {
  const favoriteBeerRecipe = useStore((state) => state.favoriteBeerRecipes);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/");
  return (
    <div>
      <BackLink to={backLinkLocationRef.current}>Back</BackLink>
      <RecipesList recipes={favoriteBeerRecipe} location={location} />
    </div>
  );
};

export default FavoriteRecipes;
