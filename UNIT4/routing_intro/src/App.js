import React from 'react';
import DogApp from './components/DogApp';
import Clock from './components/Clock';
import Form from './components/Form';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Person from './components/Person';
import Login from './components/Login';
import Movies from './components/Movies';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <NavBar/>
    <Switch >
        <Route path={"/login"}>
          <Login/>
        </Route>
        <Route path={"/movies"}>
          <Movies/>
        </Route>
        <Route path={"/form"} component={Form} />
        <Route path={"/clock"} component={Clock} />
          <Route path={"/dogs"} component={DogApp} />
        <Route path={"/people/:id"}>
          <Person />
        </Route>
        <Route  exact path={"/"} >
            <Home/>
            <Home/>
        </Route>
        <Route path="*" render={() => <div>Something Went Wrong</div>} />
    </Switch>
      
    </div>
  );
}

export default App;
