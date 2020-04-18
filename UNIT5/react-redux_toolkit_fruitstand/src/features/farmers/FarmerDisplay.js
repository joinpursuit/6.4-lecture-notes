
import React from 'react';
import { useSelector } from 'react-redux';

const FarmerDisplay = () => {
    const farmers = useSelector((state) => {
        // debugger
        return Object.values(state.farmers);
    })
    return (
        <ul>
            {farmers.map((farmer) => {
                return <li key={farmer.id}>{farmer.name}</li>
            })}
        </ul>
    )
}

export default FarmerDisplay; 