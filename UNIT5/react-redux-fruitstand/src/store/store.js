import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
const store = createStore(rootReducer, {fruits: [], 
                                        farmers:  { 
                                            1: { id: 1, name: 'corey', paid: false },
                                            2: { id: 2, name: 'jon', paid: false }
                                        }                                        
}) // takes in reducer, initalState, enhancers / middleware 

export default store; 