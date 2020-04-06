// { 
//     1: { id: 1, name: 'corey', paid: false }
//     2: { id: 2, name: 'jon', paid: false }
// }
import { HIRE_FARMER, PAY_FARMER } from '../actions/actionTypes';

// const farmer = (state, action) => {
//     switch (action.type) {
//         case HIRE_FARMER:
//             return {...action.payload, paid: false}  
//         default:
//             return state;
//     }
// }

// PURE FUNCTION : 
// A function that given the same input will always give the same output. 
// A pure function must never have side effects. 

const adder = (a, b) => {  // pure function
    return a + b; 
}

const sort = (arr) => { // NOT pure function
    return arr.sort((a, b) => a - b);
}


const _defaultState = {};

const farmersReducer = (state = _defaultState, action ) => {
    Object.freeze(state); // This will throw an error if you accidentally mutate the state 
    const newState = { ...state };
    switch (action.type) {
        case HIRE_FARMER:
            let farmer = {
                ...action.payload,
                paid: false 
            }
            // let farmer = farmer(null, action)
            newState[farmer.id] = farmer; 
            return newState;
        case PAY_FARMER: 
            let farmerToPay = newState[action.payload]; // action.payload is the id of the farmer we want 
            farmerToPay.paid = !farmerToPay.paid;
            return newState;
    
        default:
            return state; 
    }
}

export default farmersReducer;