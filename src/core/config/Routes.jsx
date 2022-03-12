import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../../components/template/Layout';

const Home = React.lazy(() => import('../../pages/Home'));

const LazyLoadedRoute = ({ component }) => {
  return (
    <React.Suspense fallback={<>Carregando...</>}>{component}</React.Suspense>
  );
};

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          index
          element={<LazyLoadedRoute component={<Home />} />}
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
