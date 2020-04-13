import React, { useContext } from 'react';
import { CounterContext } from "../providers/CounterProvider";

const CounterUpdater = () => {
    const { increment, decrement } = useContext(CounterContext);
    return (
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default CounterUpdater;