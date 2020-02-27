import React from 'react';
import { useParams } from 'react-router-dom'

const Person = () => {
    const { id } = useParams();
    return (
        <div>{id}</div>
    )
}


export default Person; 