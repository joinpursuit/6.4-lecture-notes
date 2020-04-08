import  { RECEIVE_ALL_POSTS } from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
      case RECEIVE_ALL_POSTS:
        return action.payload; 
      default:
        return state;
    }
};
