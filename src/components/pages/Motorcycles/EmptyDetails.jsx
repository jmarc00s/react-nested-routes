import React from 'react';
import Search from '../../../assets/search.svg?component';

const EmptyDetails = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-full">
      <Search />
      <p className="mt-3">(Selecione uma marca para var a listagem de motos)</p>
    </div>
  );
};

export default EmptyDetails;
