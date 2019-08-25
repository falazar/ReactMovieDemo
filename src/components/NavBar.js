import React from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.css';


const NavBar = (props) => (
    <nav className="nav">
        <h2 className="logo"> {props.title} </h2>
        <ul className="nav-menu">
            <li><NavLink className="nav-menu-link" exact to="/"> All Movies</NavLink></li>
            <li><NavLink className="nav-menu-link" to="/watchlistmovies"> Watchlist Movies</NavLink></li>
            <li><NavLink className="nav-menu-link" to="/seenmovies"> Seen Movies</NavLink></li>
            <li><NavLink className="nav-menu-link" to="/intheaters"> In Theaters</NavLink></li>
            <li><NavLink className="nav-menu-link" to="/about"> About</NavLink></li>
        </ul>
    </nav>

);

export default NavBar;
