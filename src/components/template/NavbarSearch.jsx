import React from 'react';
import { useLocation } from 'react-router-dom';
import useDebounce from '../../core/hooks/useDebounce';

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
        style={{ minWidth: 400 }}
        type="text"
        className="form-control"
        placeholder="Pesquisar..."
        aria-label="Pesquisar..."
        value={displayedValue}
        onChange={({ target }) => handleValueChanges(target.value)}
      />
    </div>
  );
};

export default NavbarSearch;
