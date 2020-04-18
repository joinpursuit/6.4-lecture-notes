import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import fruits from "../features/fruitStand/fruitStandSlice";
import farmers from "../features/farmers/farmersSlice";

const reducer = {
  fruits,
  farmers,
};

const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
    reducer, 
    middleware
});


