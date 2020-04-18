import React, { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';
import '../css/Clock.css';

export default () => {
    const { theme } = useContext(ThemeContext)
    return(
        <div className={theme}>
            <h1>Clock Component</h1>       
        </div>
    )
};
