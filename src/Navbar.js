import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ onNewGame }) => (
  <header>
    <h4>
      <Link to={'/'}>
        Pokédex
      </Link>
    </h4>
  </header>
);

export default Navbar;