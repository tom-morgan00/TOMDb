import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function Navbar() {
  return (
    <div className="header">
      <div className="header__content">
        <Link to="/">
          <div className="brand">
            TOMDb <i className="fas fa-film" />
          </div>
        </Link>
        <a href="http://www.omdbapi.com/" target="__blank">
          <div className="omdb">Built using OMDb API</div>
        </a>
      </div>
    </div>
  );
}
