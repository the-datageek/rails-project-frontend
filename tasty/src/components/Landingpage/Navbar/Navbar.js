import React from 'react';
import './Navbar.css'
import {Link} from "react-router-dom"



function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src="https://thumbs.dreamstime.com/b/recipe-word-text-green-leaf-logo-icon-design-white-background-suitable-card-typography-143638205.jpg" alt="Logo" />
      </div>
      <ul className="nav-links">
      {/* <li><a href="#">Tasty Trail</a></li> */}
        <li><Link to="/">.</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/myrecipes">My Recipes</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
