import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className="navbar nav-tabs">
            <ul className="nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/" exact={true}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/boardgames" activeClassName="active">My Collection</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/search" activeClassName="active">Search</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
