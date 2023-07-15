import { FC } from "react";
import { LinkStyled, Item } from "./RecipeListItem.styled";
import { RecipesListProps } from "types/types";
import useStore from "store/store";

const RecipesListItem: FC<RecipesListProps> = ({ recipes, location }) => {
  
  const beerRecipes = useStore((state) => state.beerRecipes);
  const favoriteBeerRecipes = useStore((state) => state.favoriteBeerRecipes);
  const setFavoriteBeerRecipes = useStore(
    (state) => state.setFavoriteBeerRecipes
  );

  const handleRightClick = (id: number) => {
    const selectedRecipe = beerRecipes.find((recipe) => recipe.id === id);
    const selectedFavoriteRecipe = favoriteBeerRecipes.find(
      (recipe) => recipe.id === id
    );
    if (selectedRecipe && !selectedFavoriteRecipe) {
      setFavoriteBeerRecipes(selectedRecipe);
    }
  };

  return (
    <>
      {recipes.map(({ id, name }) => {
        return (
          <Item key={id}>
            <LinkStyled
              className="link"
              to={`/${id}`}
              state={{ from: location }}
              onContextMenu={() => handleRightClick(id)}
            >
              <p>{name}</p>
            </LinkStyled>
          </Item>
        );
      })}
    </>
  );
};

export default RecipesListItem;
