import React from 'react';
import { useParams } from 'react-router-dom';

const List = () => {
  const { itemId } = useParams();
  return <div className="border-end">List de subitems {itemId}</div>;
};

export default List;
