import React, {useContext} from 'react';
import { Context } from '../App';

const Counter = () => {
    const {count} = useContext(Context);
    debugger
    return (
        <div>
            <h1>Counter</h1>
            <h3>Count {count}</h3>
        </div>
    )
}

export default Counter; 