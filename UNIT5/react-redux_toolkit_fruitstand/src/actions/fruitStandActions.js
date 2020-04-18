import  { CLEAR_FRUITS, ADD_FRUIT } from './actionTypes';


export const addFruit = (fruit) => {
    return {
        type: ADD_FRUIT,
        payload: fruit
    }
}

export const clearFruits = () => {
    return {
        type: CLEAR_FRUITS
    }
}

