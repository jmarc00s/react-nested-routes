import React from 'react';

const LazyLoadedRoute = ({ component }) => {
  return (
    <React.Suspense fallback={<>Carregando...</>}>{component}</React.Suspense>
  );
};

export default LazyLoadedRoute;
