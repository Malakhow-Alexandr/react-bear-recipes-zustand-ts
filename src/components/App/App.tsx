import { useEffect } from "react";
import useStore from "store/store";
import { fetchBeerRecipes } from "services/fetchApi";
import { GlobalStyle } from "GlobalStyle";

const App: React.FC = () => {
  const beerRecipes = useStore((state) => state.beerRecipes);
  const currentPage = useStore((state)=> state.currentPage)
  const setBeerRecipes = useStore((state) => state.setBeerRecipes);
  const setCurrentPage = useStore((state) => state.setCurrentPage);



  useEffect(() => {
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
    getRecepies(currentPage);
  }, [currentPage, setBeerRecipes, setCurrentPage]);

  
  return (
    <div>
      <ul>
        {beerRecipes.map(recipe => <li><p>{recipe.name}</p></li>)}
      </ul>
      <button onClick={()=> {setCurrentPage(currentPage -1)}}>prevPage</button>
      <button onClick={()=> {setCurrentPage(currentPage + 1)}}>nextPage</button>
      <GlobalStyle />
    </div>
  );
};

export default App;
