import { INCREMENT, DECREMENT } from '../actions/actionsTypes'

const CounterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT: 
            return state - 1;
    
        default:
            return state;
    }
}

export default CounterReducer