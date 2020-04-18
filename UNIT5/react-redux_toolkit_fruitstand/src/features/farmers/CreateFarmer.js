import React, { useState } from 'react';
import { hireFarmer } from './farmersSlice';
import { useDispatch } from 'react-redux';
// let nextId = 3;

const CreateFarmer = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(hireFarmer({
            name
        }))
        setName("");
    }

    return( 
        <form onSubmit={handleSubmit}>
            <input value={name} placeholder="Farmer Name" onChange={(e) => setName(e.target.value)}/>
        </form>
    )

}

export default CreateFarmer; 