import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, fetchAllPosts, deletePost } from './postsSlice';
import { selectLoading } from '../loading/loadingSlice';
import { selectErrors } from '../errors/errorsSlice';

export default () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllPosts());
    }, [])
    const posts = useSelector(selectPosts);
    const isLoading = useSelector(selectLoading);
    const errors = useSelector(selectErrors);

    if(isLoading) {
        return(
            <div>LOADING...</div>
        )
    }

    if(errors) {
        return (
            <>
                <div>{errors}</div>
                <button onClick={() => dispatch(fetchAllPosts())}>Retry</button>
            </>
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
