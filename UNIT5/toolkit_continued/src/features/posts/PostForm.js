import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from './postsSlice';


export default () => {
    const [ input, setInput ] = useState("");
    const dispatch = useDispatch();

    const handleSumbit = (e) => {
        e.preventDefault(); 
        dispatch(addPost(input))
        setInput("");
    }
    return(
        <form onSubmit={handleSumbit}>
            <input value={input} onChange={e => setInput(e.target.value)} required/>
        </form>
    )
};
