import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/posts/postsSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer
  },
  middleware: [...getDefaultMiddleware(), logger],
});
