import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Link, Header } from './Navigation.styled';
import Loader from 'components/Loader/Loader';

function Navigation() {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Recipes</Link>
          <Link to="/favorite">favoriteRecipes</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Navigation;