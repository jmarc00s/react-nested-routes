import React from 'react';

const PageHeader = ({ title }) => {
  return (
    <div>
      <h3 className="display-6">{title}</h3>
      <hr className="mb-5" />
    </div>
  );
};

export default PageHeader;
