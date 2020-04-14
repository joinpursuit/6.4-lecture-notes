import { ADD_TODO } from './actionsTypes';

export const addTodo = todo => ({
    type: ADD_TODO, 
    payload: todo
})