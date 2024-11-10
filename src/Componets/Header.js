// Components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';  // Import the CSS file


function Header() {
  return (
    <header className="header">
      <h1>OverRentals</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/service">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
