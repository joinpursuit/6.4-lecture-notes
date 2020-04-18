import React from 'react';
import  { useSelector  } from 'react-redux'
import { selectFruits } from './fruitStandSlice';

const FruitCart = () => {
    const fruits = useSelector(selectFruits);
    return (
        <ul>
            {fruits.map((fruit, i) => {
                return <li key={i}>{fruit}</li>
            })}
        </ul>
    )
}

export default FruitCart;