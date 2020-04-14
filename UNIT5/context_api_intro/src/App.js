import React, { createContext } from 'react';
import './App.css';
import Counter from './components/Counter';
import CounterUpdater from './components/CounterUpdater';
import CounterProvider from './providers/CounterProvider';
import TodosProvider from './providers/TodosProvider';
import ClassCounter from './components/classCounter';
import TodosIndex from './components/TodosIndex';
import TodoForm from './components/TodoForm';

// export const Context = createContext();

function App() {
  // const [count, setCount] = useState(0);

  // const increment = () => setCount(count + 1);
  // const decrement = () => setCount(count - 1);

  return (
    <div className="App">
      {/* <Context.Provider value={{count, increment, decrement}}> */}
      <TodosProvider>

        <CounterProvider>
          <Counter/>
          <CounterUpdater />
          <ClassCounter />
        </CounterProvider>

        <TodoForm />
        <TodosIndex />
      </TodosProvider>
      {/* </Context.Provider> */}
    </div>
  );
}

export default App;
