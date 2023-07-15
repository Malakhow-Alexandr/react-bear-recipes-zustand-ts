import { FC } from "react";
import {
  LinkStyled,
  Item,
  BeerPicture,
  CardTitle,
  MetaContainer,
  MetaInfo,
  MetaInfoTitle,
  FavoriteButton,
  FavoriteStar,
  FavoriteText,
} from "./RecipeListItem.styled";
import { RecipesListProps } from "types/types";
import noImg from "../../images/noImg.jpg";
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
      {recipes.map(
        ({ id, name, image_url, tagline, contributed_by, first_brewed }) => {
          const isFavorite = favoriteBeerRecipes.some(
            (recipe) => recipe.id === id
          );
          const itemStyle = isFavorite ? { outline: "2px solid green" } : {};
          return (
            <Item key={id} style={itemStyle}>
              <CardTitle>{name}</CardTitle>
              <LinkStyled
                className="link"
                to={`/${id}`}
                state={{ from: location }}
                onContextMenu={() => handleRightClick(id)}
              >
                <BeerPicture
                  src={image_url || noImg}
                  alt={name}
                  width="90"
                  height="220"
                />
                <MetaContainer>
                  <MetaInfo>
                    <MetaInfoTitle>Tagline: </MetaInfoTitle>
                    <br /> {tagline}
                  </MetaInfo>
                  <MetaInfo>
                    <MetaInfoTitle>First time brewed: </MetaInfoTitle>
                    <br /> {first_brewed}
                  </MetaInfo>
                  <MetaInfo>
                    <MetaInfoTitle>Created by: </MetaInfoTitle>
                    <br /> {contributed_by}
                  </MetaInfo>
                </MetaContainer>
              </LinkStyled>
              {isFavorite && (
                <FavoriteButton onClick={() => handlerDeleteFromFavorite(id)}>
                  <FavoriteText>Delete</FavoriteText><FavoriteStar />
                </FavoriteButton>
              )}
            </Item>
          );
        }
      )}
    </>
  );
};

export default RecipesListItem;
