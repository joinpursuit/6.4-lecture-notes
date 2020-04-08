import { RECEIVE_TODO, TOGGLE_TODO } from '../actions/actionTypes';

const todosReducer = (state = {}, {type, payload}) => { // still takes in action but destructors it
    const newState = {...state};
    switch (type) {
      case RECEIVE_TODO:
        newState[payload.id] = payload;
        return newState;
      case TOGGLE_TODO:
        const todo = {...newState[payload]}
        todo.complete = !todo.complete; 
        newState[payload] = todo; 
        return newState; 
      default:
        return state;
    }
}

export default todosReducer;