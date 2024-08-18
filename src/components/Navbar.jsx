import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/">About</NavLink>
            </li>
            <li>
                <NavLink to="/">Post a Job</NavLink>
            </li>
            <li>
                <NavLink to="/">Find Projects</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar