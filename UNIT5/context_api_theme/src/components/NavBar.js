import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../providers/ThemeProvider';
import "../css/NavBar.css";

export default () => {
    const { toggleTheme, theme } = useContext(ThemeContext);
    return (
        <nav className={theme}>
            <NavLink exact to="/" >Home</NavLink>
            <NavLink  to="/clock" >Clock</NavLink>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </nav>
    )
};
