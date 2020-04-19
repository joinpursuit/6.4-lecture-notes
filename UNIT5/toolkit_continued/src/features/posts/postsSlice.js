import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAllPosts",
  async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      return res.data;
    } catch (err) {
      throw Error(err.message);
    }
  }
);

//Each post to have a title, and an id. 
let id = 1000;

export const postsSlice = createSlice({
    name: "posts",
    initialState: [], 
    reducers: {
        addPost: {
            reducer: (state, action) => { state.unshift(action.payload) },
            prepare: (post) => ({ payload: {id: id++, title: post }})
        },
        receiveAllPosts: (state, action) => action.payload
    }, 
    extraReducers: {
      [fetchAllPosts.fulfilled]: (state, {payload} ) => payload

    }
})

// export const fetchAllPosts = () => async dispatch => {
//     try {
//       const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       dispatch(receiveAllPosts(res.data))
//     } catch (err) {
//         //dispatch(receiveError(err.message))
//         throw Error(err.message);
//     }
// }


export const selectPosts = state => state.posts; 

export const { addPost, receiveAllPosts } = postsSlice.actions; 
export default postsSlice.reducer; 
