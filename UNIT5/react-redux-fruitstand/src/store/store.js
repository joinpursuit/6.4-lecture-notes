import { createStore } from 'redux';
import fruitStandReducer from '../reducers/fruitStandReducers';

const store = createStore(fruitStandReducer) // takes in reducer, initalState, enhancers / middleware 

export default store; 