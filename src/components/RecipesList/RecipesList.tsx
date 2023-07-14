import { FC } from "react";
import { RecipesListStyled } from "./RecipesList.styled";
import { RecipesListProps } from "types/types";
import RecipesListItem from "components/RecipeListItem/RecipeListItem";

const RecipesList: FC<RecipesListProps> = ({ recipes, location }) => {
  return (
    <RecipesListStyled>
      <RecipesListItem recipes={recipes} location={location}/>
    </RecipesListStyled>
  );
};

export default RecipesList;
