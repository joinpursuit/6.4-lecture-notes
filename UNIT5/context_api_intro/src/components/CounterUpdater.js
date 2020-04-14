import React, { useContext } from 'react';
import { CounterContext } from "../providers/CounterProvider";
import { increment, decrement } from '../actions/counterActions';

const CounterUpdater = () => {
    const { dispatch } = useContext(CounterContext);
    return (
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

export default CounterUpdater;