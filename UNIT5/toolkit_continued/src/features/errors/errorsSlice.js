import { createSlice } from '@reduxjs/toolkit';
// import { fetchAllPosts } from '../posts/postsSlice';

export const errorsSlice = createSlice({
    name: "errors",
    initialState: "",
    reducers: {
        receiveErrors: (state, action) => {
            return action.payload
        }, 
        clearErrors: () => ""
    }
    // extraReducers: { 
    //     [fetchAllPosts.pending]: () => "", 
    //     [fetchAllPosts.rejected]: (state, action) => {
    //         return action.error.message;
    //     }
    // }
})
export const { receiveErrors, clearErrors } = errorsSlice.actions; 

export const selectErrors = state => state.errors; 

export default errorsSlice.reducer; 