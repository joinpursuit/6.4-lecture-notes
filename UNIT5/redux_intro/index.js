const { createStore, applyMiddleware } = require('redux');
const { ADD_APPLE, ADD_BANANA, CLEAR_FRUITS, ADD_FRUIT} = require('./actions/actionTypes');
const {  clearFruits, addFruit } = require("./actions/fruitActions");
// const {logger} = require('redux-logger');
// const adder = (x) => {
//     return (y) => {
//         return x + y; 
//     }
// }

// const adder = x => y => x + y

// const add5 = adder(5);
// const add10 = adder(10);

// console.log(add10(6));
// console.log(add5(6))

const calc = () => {
    let sum = 0; 
    return {
        add: (num) => {
                sum += num; 
            },  
        sub: (num) => {
                sum -= num; 
            }, 
        getTotal: () => sum 
    }
}

// let calOne = calc();
// calOne.add(5)
// console.log(calOne.getTotal())
// calOne.add(6)
// console.log(calOne.getTotal())

// const createStore = (reducer, initialState = undefined, enhancer) => { // enhancer is where we use applyMiddleware and can pass middleware
//     let state = initialState;
//     let listeners = [];

//     const getState = () => state; 

//     const dispatch = (action) => {
//         state = reducer(state, action)
//         listeners.forEach(listener => listener());
//     }

//     const subscribe = (listener) => {
//         listeners.push(listener);
//         return () => {
//             listeners = listeners.filter(l => l !== listener);
//         }
//     }

//     const replaceReducer = () => {

//     }

//     return { getState, dispatch, subscribe, replaceReducer }
// } 
 // actions are plain old JS objects with a type property and sometimes addition properties (often payload)
 // { type: "ADD_FRUIT", payload: "banana"}
 // { type: "CLEAR_FRUITS"}

// posts: [ {id: 1, body: "great move", commetns: [ {id: 5, author_id: 6}]}]
// posts: {
//     1: { id: 1, body: "great movies", comments: [5]}
// }
// comments : 
//     { 
//         5: { id: 5, author_id: 6}
//     }

const fruitStand = (state = [], action) => {
    switch (action.type) {
        case ADD_FRUIT:
            return [...state, action.payload]
        // case ADD_BANANA:
        //     return [...state, "banana"]
        // case ADD_APPLE:
        //     return [...state, "apple"]
        case CLEAR_FRUITS: 
            return [];
        default:
            return state; 
    }
}


const logger = store => next => action => {
    console.log("Action Received: ", action);
    console.log("Old State: ", store.getState());
    const result = next(action);
    console.log("New State: ", store.getState());
    return result;
}

const store = createStore(fruitStand, [], applyMiddleware(logger))
// store.subscribe(() => {
//     console.log(store.getState())
// })
// let storeHasChangedUnsub = store.subscribe(() => {
//                                 console.log("store has changed")
//                             })
store.dispatch(addFruit("banana"));
store.dispatch(addFruit("apple"));
store.dispatch(addFruit("kiwi"));
store.dispatch(clearFruits());

//TODO: 
// Make this cleaner! Add a new type for adding a generic fruit. 
// You'll also need to add a new action creator. Should it take arguments? 
// Update your reducer to take your new action. Try it out and test it. 
// Be back in the room in 15 minutes. 

// store.dispatch({type: "ADD_BANANA"})
// storeHasChangedUnsub();
// store.dispatch({type: "ADD_APPLE"})
// store.dispatch({type: "CLEAR_FRUITS"})

// console.log(fruitStand(["apple"], {type: "ADD_BANANA"}))