import React, { useContext } from 'react';
import { TodosContext } from '../providers/TodosProvider';

const TodosIndex = () => {
    const { todos } = useContext(TodosContext);
    return(
        <ul>
            {todos.map(todo => {
                return <li key={todo.id}>{todo.body}</li>
            })}
        </ul>
    )
}

export default TodosIndex; 