import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'; // thunk will allow us to dispatch functions as well as actions 
import rootReducer from '../reducers/rootReducer';
const store = createStore(rootReducer, {}, applyMiddleware(logger, thunk))
export default store; 


// Essentially what thunk does under the hood.
// const thunk = ({dispatch, getState}) => (next) => (action) => {
//   if (typeof action === "function") {
//     return action(dispatch, getState);
//   }
//   return next(action);
// };