import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import NavbarSearch from './NavbarSearch';

const Navbar = () => {
  const navigate = useNavigate();

  function handleSearchTextChange(value) {
    navigate(`/search?q=${value}`);
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          MotoWiki
        </NavLink>

        <div>
          <NavbarSearch
            onValueChange={(value) => handleSearchTextChange(value)}
          />
        </div>

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Início
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/motorcycles" className="nav-link">
              Motos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
