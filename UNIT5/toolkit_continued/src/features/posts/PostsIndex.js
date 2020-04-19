import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, fetchAllPosts } from './postsSlice';

export default () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllPosts());
    }, [])
    const posts = useSelector(selectPosts);
    return(
        <ul>
            {posts.map(post => {
                return <li key={post.id}>{post.title}</li>
            })}
        </ul>
    )
};
