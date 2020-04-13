import React, { createContext, useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import CounterUpdater from './components/CounterUpdater';

export const Context = createContext();

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="App">
    <Context.Provider value={{count, increment, decrement}}>
      <Counter />
      <CounterUpdater />
    </Context.Provider>
    </div>
  );
}

export default App;
