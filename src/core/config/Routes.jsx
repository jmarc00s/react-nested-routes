import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EmptyDetails from '../../components/pages/home/EmptyDetails';
import List from '../../components/pages/home/List';
import Layout from '../../components/template/Layout';
import Motorcycles from '../../pages/Motorcycles';

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
        <Route
          path="/motorcycles"
          index
          element={<LazyLoadedRoute component={<Motorcycles />} />}
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
