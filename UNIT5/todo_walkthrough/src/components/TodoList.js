import React from 'react';
import { useSelector } from 'react-redux';
import TodoListItem from './TodoListItem';


const filterTodos = (todos, filter) => {
    if(filter === "all") return todos; 
    if(filter === "complete") return todos.filter(todo => todo.complete);
    if(filter === "active") return todos.filter(todo => !todo.complete);
}

const TodoList = () => {
    const todos = useSelector(state => Object.values(state.todos));
    const filter = useSelector(state => state.visibilityFilter);

    return(
        <ul>
            {filterTodos(todos,filter).reverse().map(todo => {
                return <TodoListItem todo={todo} key={todo.id}/>
            })}
        </ul>
    )
}

export default TodoList;