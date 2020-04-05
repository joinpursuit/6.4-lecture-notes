import React from 'react';
import './App.css';
import FruitStand from './components/Fruits/FruitStand';
import FruitCart from './components/Fruits/FruitCart';
import FarmerDisplay from './components/Farmers/FarmerDisplay';
import CreateFarmer from './components/Farmers/CreateFarmer';
// import FruitStandContainer from './containers/FruitStandContainer';
// import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      {/* <Wrapper> */}
        {/* <FruitStandContainer /> */}
        <FruitStand />
        <FruitCart/>
        <FarmerDisplay/>
        <CreateFarmer/>
      {/* </Wrapper> */}
    </div>
  );
}

export default App;
