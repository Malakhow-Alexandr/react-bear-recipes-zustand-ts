import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { State, Beer } from "types/types";

const useStore = create<State>()(
  devtools(
    immer((set) => ({
      beerRecipes: [] as Beer[],
      favoriteBeerRecipes: [] as Beer[],
      beerRecipe: [] as Beer[],
      currentPage: 1,
      isLoading: false,
      errors: [],
      setBeerRecipes: (beerRecipes) => set({ beerRecipes }),
      setBeerRecipe: (beerRecipe) => set({ beerRecipe }),
      setFavoriteBeerRecipes: (newRecipe) =>
      set((state) => {
        state.favoriteBeerRecipes.push(newRecipe);
      }),
      setCurrentPage: (currentPage: number) => set({ currentPage }),
      setLoading: (isLoading: boolean) => set({ isLoading }),
      setErrors: (errors: string[]) => set({ errors }),
    }))
  )
);

export default useStore;
