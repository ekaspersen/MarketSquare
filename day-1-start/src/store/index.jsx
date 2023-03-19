// Helps create the redux store
import { configureStore } from "@reduxjs/toolkit";
// Helps combining the modules
import { combineReducers } from "@reduxjs/toolkit";
import listings from "./modules/listings";

const reducer = combineReducers({
    // List up all modules here
    listings,
});

// Here i am creating the store
const index = configureStore({
    reducer,
});

export default index;
