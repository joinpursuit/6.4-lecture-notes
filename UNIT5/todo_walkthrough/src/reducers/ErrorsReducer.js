import { CLEAR_ERRORS, RECEIVE_ERROR } from "../actions/actionTypes";

const errorsReducer = (state = "", action) => {
    switch (action.type) {
        case RECEIVE_ERROR:
            return action.payload;    
        case CLEAR_ERRORS: 
            return "";
        default:
            return state;
    }
}

export default errorsReducer;