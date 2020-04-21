import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, fetchAllPosts, deletePost } from './postsSlice';
import { selectLoading } from '../loading/loadingSlice';

export default () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllPosts());
    }, [])
    const posts = useSelector(selectPosts);
    const isLoading = useSelector(selectLoading);
    if(isLoading) {
        return(
            <div>LOADING...</div>
        )
    }
    return(
        <ul onClick={e => dispatch(deletePost(e.target.id))}> 
            {posts.map(post => {
                return <li key={post.id} id={post.id}>{post.title}</li>
            })}
        </ul>
    )
};
