import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import VisibilityFilter from './VisibilityFilter';

const TodosMain = () => {
    return (
        <div>
            <h1>Todo App!</h1>
            <TodoForm />
            <VisibilityFilter/>
            <TodoList/>
        </div>
    )
};

export default TodosMain;
