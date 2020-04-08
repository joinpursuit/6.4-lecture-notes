import { RECEIVE_TODO } from '../actions/actionTypes';

const nextTodoIdReducer = (state = 1, action) => {
    switch (action.type) {
        case RECEIVE_TODO: // what action type should we listen for in order to update this slice of state
         return state + 1;   
        default:
            return state;
    }
}

export default nextTodoIdReducer; 