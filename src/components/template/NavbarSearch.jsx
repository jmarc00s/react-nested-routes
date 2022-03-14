import classNames from 'classnames';
import React from 'react';
import { useLocation } from 'react-router-dom';
import useDebounce from '../../core/hooks/useDebounce';
import styles from './NavbarSearch.module.css';

const NavbarSearch = ({ onValueChange }) => {
  const [displayedValue, setDisplayedValue] = React.useState('');
  const debounceValueChanges = useDebounce(onValueChange);
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (!pathname.includes('search')) {
      setDisplayedValue('');
    }
  }, [pathname]);

  function handleValueChanges(value) {
    if (value) {
      debounceValueChanges(value);
    }

    setDisplayedValue(value);
  }

  return (
    <div className="input-group">
      <input
        type="text"
        className={classNames(`form-control`, styles.searchInput)}
        placeholder="Pesquisar..."
        aria-label="Pesquisar..."
        value={displayedValue}
        onChange={({ target }) => handleValueChanges(target.value)}
      />
    </div>
  );
};

export default NavbarSearch;
