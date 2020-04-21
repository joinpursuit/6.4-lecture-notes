import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { toggleLoading } from '../loading/loadingSlice';
import axios from 'axios';

const slowCode = async () => {
     return new Promise(function (resolve, reject) {
        setTimeout(resolve, 3000);
      })
}

// export const fetchAllPosts = () => async dispatch => {
//     try {
//           dispatch(toggleLoading());
//           await slowCode();
//           const res = await axios.get( "https://jsonplaceholder.typicode.com/posts");
//           dispatch(receiveAllPosts(res.data));
//           dispatch(toggleLoading())
//         } catch (err) {
//            dispatch(toggleLoading());
//         //dispatch(receiveError(err.message))
//     }
// }
// Add a loadingSlice to this app. And update it while fetchAllPosts is happening. 
// Show the words LOADING in our posts componenet. 

export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAllPosts",
  async () => {
    try {
      await slowCode();
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



export const selectPosts = state => state.posts; 

export const { addPost, receiveAllPosts } = postsSlice.actions; 
export default postsSlice.reducer; 

