import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist } from "zustand/middleware";
import { State, Beer } from "types/types";

const useStore = create<State>()(
  devtools(
    persist(
      immer((set) => ({
        beerRecipes: [] as Beer[],
        favoriteBeerRecipes: [] as Beer[],
        beerRecipe: [] as Beer[],
        currentPage: 1,
        isLoading: false,
        errors: [],
        setBeerRecipes: (beerRecipes) => set({ beerRecipes }),
        setBeerRecipe: (beerRecipe) => set({ beerRecipe }),
        addFavoriteBeerRecipes: (newRecipe) =>
          set((state) => {
            state.favoriteBeerRecipes.push(newRecipe);
          }),
        removeFavoriteBeerRecipes: (favoriteBeerRecipes) =>
          set({ favoriteBeerRecipes }),
        setCurrentPage: (currentPage: number) => set({ currentPage }),
        setLoading: (isLoading: boolean) => set({ isLoading }),
        setErrors: (errors: string[]) => set({ errors }),
      })),
      {
        name: "Favorite-Beer-Recipes",
        partialize: (state) => ({
          favoriteBeerRecipes: state.favoriteBeerRecipes,
        }),
      }
    )
  )
);

export default useStore;
