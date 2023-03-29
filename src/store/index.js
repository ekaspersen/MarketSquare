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
<<<<<<< HEAD:day-3-loader-start/src/store/index.js
>>>>>>> 5c5e0c2267a681c0aafd53ea75e9395a8f70581d
=======
import cartSlice from "./modules/cartSlice";
import errorSlice from "./modules/errorSlice";
>>>>>>> 481e7b92c74c63676514857755476a21f54be89c:src/store/index.js

const reducer = combineReducers({
    // here we will be adding reducers
    products: productsSlice, // NOTE: Remember this name you will use with useSelector
<<<<<<< HEAD:day-3-loader-start/src/store/index.js
<<<<<<< HEAD
    loader: loaderSlice,
});
=======
    loader: loaderSlice
=======
    loader: loaderSlice,
    cart: cartSlice,
    error: errorSlice
>>>>>>> 481e7b92c74c63676514857755476a21f54be89c:src/store/index.js
})
>>>>>>> 5c5e0c2267a681c0aafd53ea75e9395a8f70581d
const index = configureStore({
    reducer,
});
export default index;
