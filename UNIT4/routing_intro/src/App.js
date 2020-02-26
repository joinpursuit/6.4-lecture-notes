import React from 'react';
import DogApp from './components/DogApp';
import Clock from './components/Clock';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Form/>
      <Clock />
      <DogApp/>
    </div>
  );
}

export default App;
