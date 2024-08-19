import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';


function Navbar() {
    
  return (
    <>
    <nav id="nav">
      <div id="navopt">
        <h3>
          <NavLink to="/about">About</NavLink>
        </h3>
        <h3>
          <NavLink to="/project">Project</NavLink>
        </h3>
        <h3>
          <NavLink to="/information">Information</NavLink>
        </h3>
        <h3>
          <NavLink to="/info">Info</NavLink>
        </h3>
      </div>
      <div id="button">
        <h1>
          <NavLink to="/signup">Signup</NavLink>
        </h1>
        <h1>
          <NavLink to="/login">Login</NavLink>
        </h1>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
