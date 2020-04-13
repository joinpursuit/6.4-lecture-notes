import React, {useContext} from 'react';
import { CounterContext } from '../providers/CounterProvider';

const Counter = () => {
    const { count } = useContext(CounterContext);
    return (
        <div>
            <h1>Counter</h1>
            <h3>Count {count}</h3>
        </div>
    )
}

export default Counter; 