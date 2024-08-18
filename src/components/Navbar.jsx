import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <nav>
        <div className="navContainer">
            <div>
                <NavLink to="/">Home</NavLink>
            </div>
            <div>
                <NavLink to="/login">Login</NavLink>
            </div>
            <div>
                <NavLink to="/usertype">Signup </NavLink>
            </div>
            <div>
                <NavLink to="/resetPassword">Find Projects </NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navbar