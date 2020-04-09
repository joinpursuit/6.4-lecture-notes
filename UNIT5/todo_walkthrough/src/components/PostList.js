import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPosts } from '../actions/postActions';

const PostList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllPosts());
    }, []);

    const posts = useSelector(state => state.posts)
    return(
        <ul>
            {posts.map(post => {
                return <h3 key={post.id}>{post.title}</h3>
            })}
        </ul>
    )
}

export default PostList;