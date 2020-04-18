import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const countReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT: 
            return state - 1;
        default:
            return state; 
    }
}

export const increment = () => ({type: INCREMENT});
export const decrement = () => ({type: DECREMENT});

export const asyncIncrement = () => dispatch => {
    setTimeout(() => {
        dispatch(increment())
    }, 2000)
}

const rootReducer = combineReducers({
    count: countReducer
})


const Store = createStore(rootReducer, {}, applyMiddleware(logger, thunk));

export default Store; 