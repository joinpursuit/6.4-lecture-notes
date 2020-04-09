import axios from 'axios';

export const fetchAllPosts = () => axios.get("https://jsonplaceholder.typicode.com/posts");
export const fetchPost = (id) => axios.get("https://jsonplaceholder.typicode.com/posts");