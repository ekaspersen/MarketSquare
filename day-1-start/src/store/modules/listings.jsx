import { createSlice } from "@reduxjs/toolkit";

// Slice
// name
// initial state
// reducers -- theese are the functions that amend the change of state
const listingsSlice = createSlice({
    name: "listings",
    initialState: {
        products: [],
        total: 0,
    },
    reducers: {
        //Here we declare the functions which amend our state
        SET_PRODUCTS: (state, action) => {
            state.products = action.payload;
        },
    },
});
export default listingsSlice.reducer;

// Actions // API call etc ***NB: WE DON'T CHANGE THE STATE HERE***
const { SET_PRODUCTS } = listingsSlice.actions;

//fetch
export const fetchProducts = () => async (dispatch) => {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data);
        dispatch(SET_PRODUCTS(data.products));
    } catch (error) {
        // Error msg's
        return console.error(error);
    }
};
