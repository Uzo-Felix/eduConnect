import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/content">Content</Link>
        <Link to="/contributions">Contributions</Link>
      </nav>
    </header>
  );
}

export default Header;
