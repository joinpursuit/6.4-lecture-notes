const { ADD_APPLE, ADD_BANANA, CLEAR_FRUITS} = require('./actionTypes');

// Action Creators must return actions. 
// Actions have a type property that give instructions 
// to the reducuer on how to update our application state. 

const addApple = () => {
    return { 
        type: ADD_APPLE
    }
}

const addBanana = () => {
    return {
        type: ADD_BANANA
    }
}

const clearFruits = () => {
    return {
        type: CLEAR_FRUITS
    }
}

module.exports = { addApple, addBanana, clearFruits }