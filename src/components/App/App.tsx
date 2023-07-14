import { useEffect } from "react";
import useStore from "store/store";
import { fetchBeerRecipes } from "services/fetchApi";
import { GlobalStyle } from "GlobalStyle";

const App: React.FC = () => {
  const beerRecipes = useStore((state) => state.beerRecipes);
  const setBeerRecipes = useStore((state) => state.setBeerRecipes);
  const setCurrentPage = useStore((state) => state.setCurrentPage);

  const getRecepies = async (page: number) => {
    try {
      const { data, currentPage } = await fetchBeerRecipes(page);

      if (data) {
        setBeerRecipes(data);
        setCurrentPage(currentPage)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecepies(1);
  }, []);

  
  return (
    <div>
      <ul>
        {beerRecipes.map(recipe => <li><p>{recipe.name}</p></li>)}
      </ul>
      <GlobalStyle />
    </div>
  );
};

export default App;
