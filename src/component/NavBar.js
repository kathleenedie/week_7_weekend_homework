import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
    return(
        <ul className="navbar">
            <h1 className="title">Carbon Intensity</h1>
            <ul className="nav-list">
                <li>
                <Link className="nav-link" to="/">Home</Link>
                </li>
                <li>
                <Link className="nav-link" to="/Generation">Power Generation</Link>
                </li>
                <li>
                <Link className="nav-link" to="/chart">Chart</Link>
                </li>
            </ul>
      </ul>
    )
}

export default NavBar;