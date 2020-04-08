import { SET_VISIBILITY_FILTER } from '../actions/actionTypes';

export default (state = "all", action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.payload; 
        default:
            return state;
    }
};
