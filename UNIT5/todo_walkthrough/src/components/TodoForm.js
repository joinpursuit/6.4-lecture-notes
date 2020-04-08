import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo } from '../actions/todoActions';

const TodoForm = () => {
    const [ body, setBody ] = useState("")
    const dispatch = useDispatch();
    const id = useSelector(state => state.nextId);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createTodo({
           body, 
           id,
           complete: false
        }))
        setBody("")
    }
    return(
        <form onSubmit={handleSubmit}>
            <input value={body} onChange={e => setBody(e.target.value)} required/>
        </form>
    )
}

export default TodoForm;