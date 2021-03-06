import classNames from 'classnames';
import React from 'react';
import style from './list.module.css';

const List = ({ children }) => {
  return (
    <ul
      className={classNames(
        'list-unstyled p-1  justify-content-center align-items-center',
        style.list
      )}
    >
      {children}
    </ul>
  );
};

const ListItem = ({ children, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={classNames('px-2 py-4 border-bottom', style['list-item'])}
    >
      {children}
    </li>
  );
};

List.Item = ListItem;

export default List;
