import React, {useState, createContext} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Clock from './components/Clock'
import ThemeProvider from './providers/ThemeProvider';

// export const ThemeContext = createContext("light")

function App() {
  // const [ theme, setTheme ] = useState("light");
  // const toggleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // }
  return (
    <div >
      <ThemeProvider>
        <NavBar/>
        <Switch >
          <Route exact path={"/"} >
              <Home />
          </Route>
          <Route path={"/clock"} >
              <Clock />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
