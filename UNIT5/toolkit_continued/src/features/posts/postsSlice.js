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
            // const num = Math.floor(Math.random() * 2);
            // if (num === 0) {
            //   throw Error("NETWORK ERROR");
            // }
//           const res = await axios.get( "https://jsonplaceholder.typicode.com/posts");
//           dispatch(receiveAllPosts(res.data));
//           dispatch(toggleLoading())
//         } catch (err) {
//            dispatch(toggleLoading());
//         //dispatch(receiveError(err.message))
//     }
// }
// Add the ability for us to be able to delete individual posts by 
// clicking on the post. 
// Add an errors slice. Half the time we try and fetchAllPosts 
// it currently fails. When the fetch fails let's notify the user and 
// give them the option of re-fetching all our posts. 


export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAllPosts",
  async () => {
    try {
      await slowCode();
      if (Math.floor(Math.random() * 2)) {
        throw Error("NETWORK ERROR");
      }
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
        receiveAllPosts: (state, action) => action.payload,
        deletePost: (state, action) => { // id to remove is action.payload
          // return state.filter(post => post.id !== Number(action.payload));
          let postIdx = state.findIndex(post => post.id === parseInt(action.payload));
          state.splice(postIdx, 1);
        }
    }, 
    extraReducers: {
      [fetchAllPosts.fulfilled]: (state, {payload} ) => payload

    }
})



export const selectPosts = state => state.posts; 

export const { addPost, receiveAllPosts, deletePost } = postsSlice.actions; 
export default postsSlice.reducer; 

