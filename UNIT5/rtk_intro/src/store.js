import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import count from './features/counter/counterSlice';

const middleware = [...getDefaultMiddleware(), logger];

const reducer = {
    count
}

const store = configureStore({
    reducer,
    middleware
})

export default store; 