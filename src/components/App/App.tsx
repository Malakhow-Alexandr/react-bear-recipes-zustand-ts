import React, { lazy, FC } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "components/Navigation/Navigation";

import { GlobalStyle } from "GlobalStyle";

const Recipes = lazy(() => import("pages/Recipes/Recipes"));
const Recipe = lazy(() => import("pages/Recipe/Recipe"));
const FavoriteRecipes = lazy(
  () => import("pages/FavoriteRecipes/FavoriteRecipes")
);

const App: FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Recipes />} />
          <Route path="/:recipeId" element={<Recipe />} />
          <Route path="/favorite" element={<FavoriteRecipes />} />
          <Route path="*" element={<Recipes />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </div>
  );
};

export default App;
