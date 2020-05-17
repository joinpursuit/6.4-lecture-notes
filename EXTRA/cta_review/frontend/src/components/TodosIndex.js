import React, { useState, useEffect } from 'react';


export default function TodosIndex({todos}) {

    return(
        <div>
            <h1>Users Todos</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.body}
                    </li>
                ))}
            </ul>
        </div>
    )
};
