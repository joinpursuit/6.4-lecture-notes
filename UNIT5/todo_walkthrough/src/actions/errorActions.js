import { CLEAR_ERRORS, RECEIVE_ERROR } from './actionTypes'

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const receiveErrors = (err) => ({
    type: RECEIVE_ERROR, 
    payload: err
})

