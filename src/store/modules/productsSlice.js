<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";
import { setLoadingState } from "./loaderSlice"; // import the setLoadingState action
=======
import {createSlice} from '@reduxjs/toolkit'
import {setLoadingState} from "./loaderSlice"
<<<<<<< HEAD:day-3-loader-start/src/store/modules/productsSlice.js
>>>>>>> 5c5e0c2267a681c0aafd53ea75e9395a8f70581d
=======
import {setError} from "./errorSlice"
>>>>>>> 481e7b92c74c63676514857755476a21f54be89c:src/store/modules/productsSlice.js

// Slice
// A function that accepts an initial state, an object full of reducer functions,
// and a “slice name”, and automatically generates action creators and action types that correspond to the reducers and state.
//The reducer argument is passed to createReducer()
const productsSlice = createSlice({
    name: "products",
    initialState: {
        // Here is the initial state // = data
        products: [], // e.g
        singleProduct: null,
    },
    reducers: {
        // Here are the functions which amend the state // mutations for state
        SET_PRODUCTS: (state, action) => {
            // e.g
            console.log("SET_PRODUCTS: action.payload", action.payload);
            state.products = action.payload;
        },
        SET_SINGLE_PRODUCT: (state, action) => {
            console.log("SET_SINGLE_PRODUCT: action.payload", action.payload);
            state.singleProduct = action.payload;
        },
    },
});
export default productsSlice.reducer;

// Actions // api calls etc
<<<<<<< HEAD:day-3-loader-start/src/store/modules/productsSlice.js
const { SET_PRODUCTS } = productsSlice.actions;
const { SET_SINGLE_PRODUCT } = productsSlice.actions;
=======
const {SET_PRODUCTS} = productsSlice.actions
const {SET_SINGLE_PRODUCT} = productsSlice.actions
>>>>>>> 481e7b92c74c63676514857755476a21f54be89c:src/store/modules/productsSlice.js

// Fetch multiple products
<<<<<<< HEAD
export const fetchProducts = () => async (dispatch) => {
    dispatch(setLoadingState(true)); // use the setLoadingState action
=======
export const fetchProducts = () => async dispatch => {
    dispatch(setLoadingState(true)); // we are showing the loader
>>>>>>> 5c5e0c2267a681c0aafd53ea75e9395a8f70581d
    try {
        // const res = await api.post('/api/auth/login/', { username, password })
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data);

        // dispatch an action with the retrieved products data
        dispatch(SET_PRODUCTS(data.products));
<<<<<<< HEAD
        // disable loader because we have the data now
        dispatch(setLoadingState(false)); // use the setLoadingState action
=======
        dispatch(setLoadingState(false)); // we are hiding the loader
>>>>>>> 5c5e0c2267a681c0aafd53ea75e9395a8f70581d
    } catch (e) {
        dispatch(setLoadingState(false)); // we are hiding the loader
        // handle any errors that occur during fetching the products data
        dispatch(setError(true, e.message));
        return console.error(e.message);
    }
};

// Fetch single product
<<<<<<< HEAD
export const fetchProductById = (id) => async (dispatch) => {
    dispatch(setLoadingState(true)); // use the setLoadingState action
=======
export const fetchProductById = (id) => async dispatch => {
    dispatch(setLoadingState(true));
<<<<<<< HEAD:day-3-loader-start/src/store/modules/productsSlice.js
>>>>>>> 5c5e0c2267a681c0aafd53ea75e9395a8f70581d
=======
    dispatch(SET_SINGLE_PRODUCT({}));
    let response
>>>>>>> 481e7b92c74c63676514857755476a21f54be89c:src/store/modules/productsSlice.js
    try {
        response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        console.log("Single Product Data: ", data);
        // dispatch an action with the retrieved data
        dispatch(SET_SINGLE_PRODUCT(data));
<<<<<<< HEAD
        // disable loader because we have the data now
        dispatch(setLoadingState(false)); // use the setLoadingState action
=======
        dispatch(setLoadingState(false));
>>>>>>> 5c5e0c2267a681c0aafd53ea75e9395a8f70581d
    } catch (e) {
        // handle any errors that occur during the fetch
        console.log("here error happened :( ")
        return console.error(e.message);
    }
<<<<<<< HEAD:day-3-loader-start/src/store/modules/productsSlice.js
};
=======
    // check if the response is not ok
    if (response.ok) {
        console.log("the response is correct");

    } else {
        console.log("the response is not ok");
        dispatch(setError(true,"some error happened"));
    }
}

>>>>>>> 481e7b92c74c63676514857755476a21f54be89c:src/store/modules/productsSlice.js

//
// import { createSlice } from '@reduxjs/toolkit' is a line of code used in JavaScript for importing a specific function called createSlice from the @reduxjs/toolkit library.
//
//     This function helps you write Redux reducers with less boilerplate code. It generates a slice of the Redux state and corresponding actions, and automatically handles the immutability of the state updates.
//
//     In simpler terms, this line of code allows you to use a powerful tool called createSlice to simplify the management of state in a Redux application, saving you time and effort.
