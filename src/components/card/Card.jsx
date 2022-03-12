import React from 'react';

const Card = ({ children }) => {
  return <div className="card h-full">{children}</div>;
};

const CardImage = (props) => {
  return <img className="card-img-top border-bottom" {...props} />;
};

const CardBody = ({ children }) => {
  return <div className="card-body">{children}</div>;
};

const CardTitle = ({ children }) => {
  return <h5 className="card-title">{children}</h5>;
};

Card.Image = CardImage;
Card.Body = CardBody;
Card.Title = CardTitle;

export default Card;
