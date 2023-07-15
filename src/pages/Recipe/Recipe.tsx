import { FC, useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import useStore from "store/store";
import { fetchBeerRecipe } from "services/fetchApi";
import BackLink from "components/BackLink/BackLink";
import noImg from "../../images/noImg.jpg";
import Loader from "components/Loader/Loader";
import {
  RecipeContainer,
  Poster,
  MetaContainer,
  Title,
  Subtitle,
  SubtitleMeta,
  FoodPairingList,
} from "./Recipe.styled";

const Recipe: FC = () => {
  const beerRecipe = useStore((state) => state.beerRecipe);
  const setBeerRecipe = useStore((state) => state.setBeerRecipe);
  const isLoading = useStore((state) => state.isLoading);
  const setIsLoading = useStore((state) => state.setLoading);

  const { recipeId } = useParams();

  const id: number = Number(recipeId);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/");

  useEffect(() => {
    setIsLoading(true);
    const getRecipe = async (id: number) => {
      try {
        const response = await fetchBeerRecipe(id);
        if (response) {
          setBeerRecipe(response);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getRecipe(id);
  }, [id, setBeerRecipe, setIsLoading]);

  return (
    <div>
      <BackLink to={backLinkLocationRef.current}>Back</BackLink>
      {isLoading ? (
        <Loader />
      ) : (
        beerRecipe.map(
          ({
            id,
            name,
            abv,
            volume,
            brewers_tips,
            contributed_by,
            description,
            first_brewed,
            tagline,
            food_pairing,
            image_url,
          }) => {
            return (
              <RecipeContainer key={id}>
                <Poster src={image_url || noImg} alt={name} />
                <MetaContainer>
                  <Title>{name}</Title>
                  <Subtitle>
                    Tagline: <SubtitleMeta>{tagline}</SubtitleMeta>
                  </Subtitle>
                  <Subtitle>
                    Alcohol by volume: <SubtitleMeta>{abv}%</SubtitleMeta>
                  </Subtitle>
                  <Subtitle>
                    Description: <SubtitleMeta>{description}</SubtitleMeta>
                  </Subtitle>
                  <Subtitle>
                    Created by: <SubtitleMeta>{contributed_by}</SubtitleMeta>
                  </Subtitle>
                  <Subtitle>
                    First time brewed:{" "}
                    <SubtitleMeta>{first_brewed}</SubtitleMeta>
                  </Subtitle>
                  <Subtitle>
                    Brewers tips: <SubtitleMeta>{brewers_tips}</SubtitleMeta>
                  </Subtitle>

                  <FoodPairingList>
                    <li>
                      <SubtitleMeta>
                        {food_pairing[0] || "No information is available!"}
                      </SubtitleMeta>
                    </li>
                    <li>
                      <SubtitleMeta>
                        {food_pairing[1] || "No information is available!"}
                      </SubtitleMeta>
                    </li>
                    <li>
                      <SubtitleMeta>
                        {food_pairing[2] || "No information is available!"}
                      </SubtitleMeta>
                    </li>
                  </FoodPairingList>
                  <Subtitle>
                    Volume: <SubtitleMeta>{volume.value} litres</SubtitleMeta>
                  </Subtitle>
                </MetaContainer>
              </RecipeContainer>
            );
          }
        )
      )}
    </div>
  );
};

export default Recipe;
