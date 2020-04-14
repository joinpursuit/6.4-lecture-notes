import React, { createContext, useState, useReducer } from 'react';
import CounterReducer from '../reducers/CounterReducer';
export const CounterContext = createContext();

const CounterProvider = (props) => {
      const [count, dispatch] = useReducer(CounterReducer, 0);
    //   const increment = () => setCount(count + 1);
    //   const decrement = () => setCount(count - 1);
      return(
          <CounterContext.Provider value={{count, dispatch}}>
            {props.children}
          </CounterContext.Provider>
      )
}

export default CounterProvider;