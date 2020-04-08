import { RECEIVE_TODO, TOGGLE_TODO } from "./actionTypes";

export const receiveTodo = (todo) => ({
    type: RECEIVE_TODO, 
    payload: todo
});

export const toggleTodo = (todoId) => ({
    type: TOGGLE_TODO,
    payload: todoId
});