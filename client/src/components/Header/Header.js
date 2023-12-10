
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <header>
      <nav className='nav1'>
      <h1>EduConnect</h1>
      <input type="text" placeholder="search..."/>
      <div className="subnav1">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
      </nav>
      <nav className='nav2'>
        <Link to="/content">Content</Link>
        <Link to="/contributions">Contributions</Link>
        <Link to="/About">About Us</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
