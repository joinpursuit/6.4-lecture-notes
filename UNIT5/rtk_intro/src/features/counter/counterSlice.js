import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: "count", 
    initialState: 0, 
    reducers: {
        increment: state => state + 1, 
        decrement: state => state - 1
    }
})

// export const asyncIncrement = createAsyncThunk(
//     "counter/asyncIncrement", 
// )

export const asyncIncrement = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increment());
  }, 2000);
};

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer; 








import { createSlice } from "@reduxjs/toolkit";
import { addTodo } from '../features/todos/todosSlice';

export const loadingSlice = createSlice({
  name: "loading",
  initialState: false,
  reducers: {
    toggleLoading: (state) => !state
  },
  extraReducers: {
    [addTodo]: (state, action) => {
      return true; 
    }
  }
});

export const { addTodo } = loadingSlice.actions;
export default loadingSlice.reducer; 
