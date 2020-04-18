import React, { createContext, useState } from 'react';

export const ThemeContext = createContext("light");

export default (props) => {
      const [theme, setTheme] = useState("light");
      
      const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
      };
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
};
