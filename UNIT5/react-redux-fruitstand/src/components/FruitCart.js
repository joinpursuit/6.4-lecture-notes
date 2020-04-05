import React from 'react';
import  { useSelector  } from 'react-redux'

const FruitCart = () => {
    const fruits = useSelector(state => { 
     return  state.fruits;
    });
    return (
        <ul>
            {fruits.map((fruit, i) => {
                return <li key={i}>{fruit}</li>
            })}
        </ul>
    )
}

export default FruitCart;