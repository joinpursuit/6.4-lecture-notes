import React from 'react';
import './App.css';
import FruitStand from './features/fruitStand/FruitStand';
import FruitCart from './features/fruitStand/FruitCart';
import FarmerDisplay from './features/farmers/FarmerDisplay';
import CreateFarmer from './features/farmers/CreateFarmer';


function App() {
  return (
    <div className="App">
        <FruitStand />
        <FruitCart/>
        <FarmerDisplay/>
        <CreateFarmer/>
    </div>
  );
}

export default App;
