import { FC } from "react";
import { LinkStyled, Item, BeerPicture } from "./RecipeListItem.styled";
import { RecipesListProps } from "types/types";
import useStore from "store/store";

const RecipesListItem: FC<RecipesListProps> = ({ recipes, location }) => {
  const beerRecipes = useStore((state) => state.beerRecipes);
  const favoriteBeerRecipes = useStore((state) => state.favoriteBeerRecipes);
  const addFavoriteBeerRecipes = useStore(
    (state) => state.addFavoriteBeerRecipes
  );
  const removeFromFavorite = useStore(
    (state) => state.removeFavoriteBeerRecipes
  );

  const handleRightClick = (id: number) => {
    const selectedRecipe = beerRecipes.find((recipe) => recipe.id === id);
    const selectedFavoriteRecipe = favoriteBeerRecipes.find(
      (recipe) => recipe.id === id
    );
    if (selectedRecipe && !selectedFavoriteRecipe) {
      addFavoriteBeerRecipes(selectedRecipe);
    }
  };

  const handlerDeleteFromFavorite = (id: number) => {
    const updatedFavoriteRecipes = favoriteBeerRecipes.filter(
      (recipe) => recipe.id !== id
    );
    removeFromFavorite(updatedFavoriteRecipes);
  };

  return (
    <>
      {recipes.map(({ id, name, image_url }) => {
        const isFavorite = favoriteBeerRecipes.some(
          (recipe) => recipe.id === id
        );

        return (
          <Item key={id}>
            <LinkStyled
              className="link"
              to={`/${id}`}
              state={{ from: location }}
              onContextMenu={() => handleRightClick(id)}
            >
              <p>{name}</p>
              <BeerPicture src={image_url} alt={name} width='90' height='220' />
            </LinkStyled>
            {isFavorite && (
              <button onClick={() => handlerDeleteFromFavorite(id)}>
                Delete
              </button>
            )}
          </Item>
        );
      })}
    </>
  );
};

export default RecipesListItem;
