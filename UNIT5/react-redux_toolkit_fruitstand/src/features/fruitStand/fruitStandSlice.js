import { createSlice } from '@reduxjs/toolkit';
import { hireFarmer } from '../farmers/farmersSlice';

export const fruitStandSlice = createSlice({
    name: "fruits", 
    initialState: [],
    reducers: {
        addFruit: (state, {payload}) => { state.push(payload)}, 
        clearFruits: () => []
    },
    extraReducers: {
        [hireFarmer]: state => { state.push("farmer fruit")}
    }
})

export const selectFruits = state => state.fruits; 

export const { addFruit, clearFruits } = fruitStandSlice.actions; 
export default fruitStandSlice.reducer;
        // {
        //     name: 'fruits', 
        //     reducer: function, 
        //     actions: [ function , function ]
        // }