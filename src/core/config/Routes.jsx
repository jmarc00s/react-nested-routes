import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../../components/template/Layout';

const Home = React.lazy(() => import('../../pages/Home'));
const Motorcycles = React.lazy(() => import('../../pages/Motorcycles'));
const MotorcycleList = React.lazy(() =>
  import('../../components/pages/Motorcycles/MotorcycleList')
);
const EmptyDetails = React.lazy(() =>
  import('../../components/pages/Motorcycles/EmptyDetails')
);

const MotorcycleDetails = React.lazy(() =>
  import('../../components/pages/Motorcycles/MotorcycleDetail')
);

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
          element={<LazyLoadedRoute component={<Motorcycles />} />}
        >
          <Route index element={<EmptyDetails />} />
          <Route path=":brandId/list" element={<MotorcycleList />} />
          <Route
            path=":motorcycleId/details"
            element={<LazyLoadedRoute component={<MotorcycleDetails />} />}
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
