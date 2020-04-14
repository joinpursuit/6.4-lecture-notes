import React, { useState, useContext } from 'react';
import { v4 } from "uuid";
import { TodosContext } from '../providers/TodosProvider';
import { addTodo } from '../actions/todoActions';

const TodoForm = () => {
    const [body, setBody] = useState("");
    const { dispatch } = useContext(TodosContext);
    // const { addTodo } = useContext(TodosContext);

    const handleSubmit = e => {
        e.preventDefault(); 
        // addTodo({ body, id: v4(), completed: false })
        const todo = { body, id: v4(), completed: false };
        dispatch(addTodo(todo));
        setBody("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <input value={body} onChange={(e) => setBody(e.target.value)}/>
        </form>
    )
}

export default TodoForm; 