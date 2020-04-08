import { RECEIVE_TODO, TOGGLE_TODO } from "./actionTypes";
import { receiveErrors } from './errorActions';

const addTodoToDatabase = async (todo) => {
    if(todo.body === "soda") throw Error("No Soda Allowed")
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return {data: { message: "Todo Added", todo}}
}

// I want you to build a backend for you application. 
// You will need to be able to fetchAllTodos 
// AddTods
// ToggleTodos 
// These need to be saved into your backend. 

//BONUS: Add a spinner to match you loading state. 
// Handle and display errors to users. 

export const createTodo = (todo) => async (dispatch) => {
    try {
        // dispatch(toggleLoading())
        let res = await addTodoToDatabase(todo);
        // dispatch(toggleLoading())
        dispatch(receiveTodo(res.data.todo))
    } catch (err) {
        dispatch(receiveErrors(err.message))
    }
}

const receiveTodo = (todo) => ({
    type: RECEIVE_TODO, 
    payload: todo
});

export const toggleTodo = (todoId) => ({
    type: TOGGLE_TODO,
    payload: todoId
});