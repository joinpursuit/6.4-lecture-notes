import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, fetchAllPosts } from './postsSlice';
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
        <ul>
            {posts.map(post => {
                return <li key={post.id}>{post.title}</li>
            })}
        </ul>
    )
};
