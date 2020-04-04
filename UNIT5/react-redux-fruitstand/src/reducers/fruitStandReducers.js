
import { ADD_FRUIT, CLEAR_FRUITS } from '../actions/actionTypes';

const fruitStandReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_FRUIT:
            return [...state, action.payload]
        case CLEAR_FRUITS: 
            return [];
        default:
            return state; 
    }
}

export default fruitStandReducer;