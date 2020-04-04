import React from 'react';
import './App.css';
import FruitStand from './components/FruitStand';
import FruitCart from './components/FruitCart';
// import FruitStandContainer from './containers/FruitStandContainer';
// import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      {/* <Wrapper> */}
        {/* <FruitStandContainer /> */}
        <FruitStand />
        <FruitCart/>
      {/* </Wrapper> */}
    </div>
  );
}

export default App;
