import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, asyncIncrement } from "../../redux";
import { increment, decrement, asyncIncrement } from "./counterSlice";
const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Counter App</h1>
            <div>Your count is {count}</div>
            <button onClick={e => dispatch(increment())}>+</button>
            <button onClick={e => dispatch(decrement())}>-</button>
            <button onClick={e => dispatch(asyncIncrement())}>Slow Increment</button>
        </div>
    )
}

export default Counter; 