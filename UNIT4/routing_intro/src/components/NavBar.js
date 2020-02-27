import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css';
const NavBar = () => {
    return(
        <nav>
            <NavLink exact to={"/"}>HOME</NavLink>
            <NavLink to={"/clock"}>clock</NavLink>
            <NavLink to={"/form"}>Form</NavLink>
            <NavLink to={"/dogs"}>Dogs</NavLink>
        </nav>
    )
}

export default NavBar; 