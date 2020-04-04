import React from 'react';
// import  { useParams } from 'react-router-dom'; // instead of ownProps
import { useSelector, useDispatch } from 'react-redux';
import { addFruit } from '../actions/fruitStandActions';
// { 
//     fruits: [],
//     farmers: {}
// }

// const FruitStand = ({ addFruit, fruits }) => { // when we had container
const FruitStand = () => {
    const fruits = useSelector((state) => state ) // application state
    console.log("fruits", fruits)
    const dispatch = useDispatch();
    return(
        <div>
            <button onClick={() => dispatch(addFruit("Apple"))}>Add Apple</button>
            <button onClick={() => dispatch(addFruit("Banana"))}>Add Banana</button>
            Lots and lots of fruits! 
        </div>
    )
}

export default FruitStand; 