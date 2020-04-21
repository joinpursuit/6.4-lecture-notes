import { createSlice } from '@reduxjs/toolkit';
import { fetchAllPosts } from '../posts/postsSlice';

export const loadingSlice = createSlice({
    name: "loading",
    initialState: false, 
    reducers: {
        toggleLoading: (state) => !state
    },
    extraReducers: {
        [fetchAllPosts.pending]: () => true,
        [fetchAllPosts.fulfilled]: () => false,
        [fetchAllPosts.rejected]: () => false
    }
})

export const selectLoading = state => state.loading; 

export const { toggleLoading } = loadingSlice.actions; 
export default loadingSlice.reducer;