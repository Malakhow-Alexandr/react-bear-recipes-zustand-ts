import { FC } from "react";
import useStore from "store/store";
import RecipesList from "components/RecipesList/RecipesList";
import { useLocation } from "react-router-dom";

const FavoriteRecipes: FC = () => {
  const favoriteBeerRecipe = useStore((state) => state.favoriteBeerRecipes);
  const location = useLocation()
  return (
    <RecipesList recipes={favoriteBeerRecipe} location={location}/>
  );
};

export default FavoriteRecipes;
