import axios from 'axios';

export const fetchAllPosts = () => axios.get("https://jsonplaceholder.typicode.com/posts");