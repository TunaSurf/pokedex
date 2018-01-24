import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ onNewGame }) => (
  <header>
    <h2>
      <Link to={'/'}>
        Pokedex
      </Link>
    </h2>
  </header>
);

export default Navbar;