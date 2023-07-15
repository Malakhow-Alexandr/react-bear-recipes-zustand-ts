import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Link, Header,Container } from './Navigation.styled';
import Loader from 'components/Loader/Loader';

function Navigation() {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Recipes</Link>
          <Link to="/favorite">Favorite</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
}

export default Navigation;