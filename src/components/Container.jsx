import classNames from 'classnames';
import React from 'react';

const Container = ({ children, className }) => {
  return <div className={classNames(className, 'container')}>{children}</div>;
};

export default Container;
