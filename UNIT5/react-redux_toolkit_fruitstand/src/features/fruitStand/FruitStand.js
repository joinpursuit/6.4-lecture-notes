import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFruit, clearFruits } from './fruitStandSlice';

const FruitStand = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addFruit(input))
    }
    return(
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
            <button onClick={() => dispatch(clearFruits())}>Clear Cart</button>
        </div>
       
    )
}

export default FruitStand; 