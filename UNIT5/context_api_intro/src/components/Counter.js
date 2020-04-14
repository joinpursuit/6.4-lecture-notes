import React, {useContext} from 'react';
import { CounterContext } from '../providers/CounterProvider';
import { TodosContext } from '../providers/TodosProvider';

const Counter = () => {
    const { count } = useContext(CounterContext);
    const { todos } = useContext(TodosContext);
    // console.log(todos)
    return (
        <div>
            <h1>Counter</h1>
            <h3>Count {count}</h3>
        </div>
    )
}

export default Counter; 