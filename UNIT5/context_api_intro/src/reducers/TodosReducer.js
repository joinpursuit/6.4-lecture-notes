import { ADD_TODO } from '../actions/actionsTypes'
const TodosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
         return [action.payload, ...state]
        case "REMOVE_TODO":
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state; 
    }
}

export default TodosReducer;