import React, { useState } from 'react';
import axios from 'axios';
import { apiURL } from '../util/apiURL';

export default function CreateTodoForm({ updateTodos }) {
    const [body, setBody] = useState("");
    const API = apiURL();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios({
            method: 'post',
            url: `${API}/api/todos`, 
            data: {
                body, 
                author_id: 1
            }
        })
        setBody("");
        updateTodos();
    }

    return(
        <form onSubmit={handleSubmit}>
            <textarea value={body} onChange={(e) => setBody(e.target.value)}/>
            <button type="submit">Create Todo</button>
        </form>
    )
};
