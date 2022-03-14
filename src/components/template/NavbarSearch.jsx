import React from 'react';
import useDebounce from '../../core/hooks/useDebounce';

const NavbarSearch = ({ onValueChange }) => {
  const [value, setValue] = React.useState('');
  const debounceValueChanges = useDebounce(onValueChange);

  function handleValueChanges(value) {
    debounceValueChanges(value);
    setValue(value);
  }

  return (
    <div className="input-group">
      <input
        style={{ minWidth: 400 }}
        type="text"
        className="form-control"
        placeholder="Pesquisar..."
        aria-label="Pesquisar..."
        value={value}
        onChange={({ target }) => handleValueChanges(target.value)}
      />
    </div>
  );
};

export default NavbarSearch;
