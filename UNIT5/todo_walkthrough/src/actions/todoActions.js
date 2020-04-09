import { RECEIVE_TODO, TOGGLE_TODO } from "./actionTypes";
import { receiveErrors, clearErrors } from './errorActions';

const addTodoToDatabase = async (todo) => {
    if(todo.body === "soda") throw Error("No Soda Allowed")
    await new Promise((resolve) => setTimeout(resolve, 500));
    return {data: { message: "Todo Added", todo}}
}

// I want you to build a backend for you application. 
// You will need to be able to fetchAllTodos 
// AddTods
// ToggleTodos 
// These need to be saved into your backend. 

//BONUS: Add a spinner to match you loading state. 
// Handle and display errors to users.
// Add steps for each todo 

export const createTodo = (todo) => async (dispatch, getState) => {
    try {
        dispatch(clearErrors())
        // dispatch(toggleLoading())
        let res = await addTodoToDatabase(todo);
        // dispatch(toggleLoading())
        res.data.todo.id = getState().nextId
        dispatch(receiveTodo(res.data.todo))
    } catch (err) {
        dispatch(receiveErrors(err.message))
        //dispatch(toggleLoading())
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