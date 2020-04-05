
import fruitStandReducer from "./fruitStandReducers";
import farmersReducer from './farmersReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    fruits: fruitStandReducer, 
    farmers: farmersReducer 
})

export default rootReducer;

// ErrorsReducer = combineReducers( 
//     sesionErrors,
//     reviewErrors 
// )