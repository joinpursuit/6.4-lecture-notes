import React, { useContext} from 'react';
import { ThemeContext } from '../providers/ThemeProvider';
import '../css/Home.css';

export default () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={theme}>
            <h1 className="homeHeader">React Context Lab HOME</h1>
        </div>
    )
};
