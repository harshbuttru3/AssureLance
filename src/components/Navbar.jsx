import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Navbar() {
    
  return (
    <div className='Navbar'>
      <div className="navopt">
        <h2>AssureLance</h2>
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
          <NavLink to="/info">Hr & Training</NavLink>
        </h3>
        <h3>
          <NavLink to="#">More</NavLink>
        </h3>
        <h1>
          {/* here you have to change the direction of the directory of the intermediate page of registering the user . */}
          <NavLink to="/usertype">Register/Login</NavLink>
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
