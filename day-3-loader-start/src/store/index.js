<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import productsSlice from "./modules/productsSlice.js";
import loaderSlice from "./modules/loaderSlice.js";
=======
import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from '@reduxjs/toolkit'
import productsSlice from "./modules/productsSlice";
import loaderSlice from "./modules/loaderSlice"
>>>>>>> 5c5e0c2267a681c0aafd53ea75e9395a8f70581d

const reducer = combineReducers({
    // here we will be adding reducers
    products: productsSlice, // NOTE: Remember this name you will use with useSelector
<<<<<<< HEAD
    loader: loaderSlice,
});
=======
    loader: loaderSlice
})
>>>>>>> 5c5e0c2267a681c0aafd53ea75e9395a8f70581d
const index = configureStore({
    reducer,
});
export default index;
