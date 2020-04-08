import axios from 'axios'; 
import * as PostApi from "../util/postsApi";
import { receiveErrors } from "./errorActions";
import { RECEIVE_ALL_POSTS } from './actionTypes';

const receiveAllPosts = (posts) => ({
  type: RECEIVE_ALL_POSTS, 
  payload: posts  
})

export const fetchAllPosts = () => async (dispatch) => {
    try {
        let res = await PostApi.fetchAllPosts(); 
        dispatch(receiveAllPosts(res.data));
    } catch (err) {
        dispatch(receiveErrors(err.message));
    }
}