import { FC } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useStore from "store/store";
import { fetchBeerRecipe } from "services/fetchApi";

const Recipe: FC = () => {
  const beerRecipe = useStore((state) => state.beerRecipe);
  const setBeerRecipe = useStore((state) => state.setBeerRecipe);

  const { recipeId } = useParams();

  const id: number = Number(recipeId);

  // const location = useLocation();

  // const backLinkLocationRef = useRef(location.state?.from ?? "/");

  useEffect(() => {
    const getRecepie = async (id: number) => {
      try {
        const response = await fetchBeerRecipe(id);
        setBeerRecipe(response);
      } catch (error) {
        console.log(error);
      }
    };
    getRecepie(id);
  }, [id, setBeerRecipe]);
  return (
    <div>
      {beerRecipe.map((recipe) => {
        return (
          <div key={recipe.id}>
            <p>{recipe.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Recipe;
