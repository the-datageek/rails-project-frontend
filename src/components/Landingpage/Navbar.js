import React from 'react';
import './Navbar.css'
function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src="https://thumbs.dreamstime.com/b/recipe-word-text-green-leaf-logo-icon-design-white-background-suitable-card-typography-143638205.jpg" alt="Logo" />
      </div>
      <ul className="nav-links">
      <li><a href="#">Tasty Trail</a></li>
        <li><a href="#">Recipes</a></li>
        <li><a href="#">My Recipes</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
