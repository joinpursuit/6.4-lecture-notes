import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/posts/postsSlice';
import loadingReducer from '../features/loading/loadingSlice';
import errorsReducer from '../features/errors/errorsSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    loading: loadingReducer,
    errors: errorsReducer,
  },
  middleware: [...getDefaultMiddleware(), logger],
});
