import React, { useState } from 'react';
// import  { useParams } from 'react-router-dom'; // instead of ownProps
import { useSelector, useDispatch } from 'react-redux';
import { addFruit } from '../../actions/fruitStandActions';
// { 
//     fruits: [],
//     farmers: {}
// }

// const FruitStand = ({ addFruit, fruits }) => { // when we had container
const FruitStand = () => {
    const [input, setInput] = useState("");
    // const fruits = useSelector((state) => state ) // application state
    // console.log("fruits", fruits)
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addFruit(input))
    }
    return(
        <>
        <div>
            Lots and lots of fruits! 

            <form onSubmit={handleSubmit}>
                <input placeholder="fruit" 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}    
                        />
            </form>
            <button onClick={() => dispatch(addFruit("Apple"))}>Add Apple</button>
            <button onClick={() => dispatch(addFruit("Banana"))}>Add Banana</button>
        </div>
        {/* <ul>
            {fruits.map((fruit, idx) => {
                return <li key={idx}>{fruit}</li>
            })}
        </ul> */}
        {/* <DisplayFruits fruits={fruits} /> */}
        </>
        // add a input field that will dispatch a users fruit of choice
        //add a view for our fruits (doesnt have to be in this component)
    )
}

export default FruitStand; 