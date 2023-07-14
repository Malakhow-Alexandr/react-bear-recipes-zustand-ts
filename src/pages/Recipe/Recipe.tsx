import { FC } from "react";
import { useEffect } from "react";
import useStore from "store/store";
import { fetchBeerRecipe } from "services/fetchApi";

const Recipe: FC = () => {
  const beerRecipe = useStore((state) => state.beerRecipe);
  const setBeerRecipe = useStore((state) => state.setBeerRecipe);

  useEffect(() => {
    const getRecepie = async (id: number) => {
      try {
        const response = await fetchBeerRecipe(id);
        setBeerRecipe(response);
      } catch (error) {
        console.log(error);
      }
    };
    getRecepie(5);
  }, [setBeerRecipe]);
  console.log(beerRecipe);
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
