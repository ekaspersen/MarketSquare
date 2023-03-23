<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
    name: "loader",
    initialState: {
        isLoading: false,
    },
    reducers: {
        SET_LOADER: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

export default loaderSlice.reducer;

//Actions
const { SET_LOADER } = loaderSlice.actions;

// loader
export const setLoadingState = (loadingStatus) => async (dispatch) => {
    console.log("loadingStatus", loadingStatus);
    dispatch(SET_LOADER(loadingStatus));
};
=======
import {createSlice} from '@reduxjs/toolkit'

const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        isLoading: false
    },
    reducers: { // here have functions which will amend the state only
        SET_LOADER: (state, action) => {
            state.isLoading = action.payload;
        }
    }
})


const {actions, reducer} = loaderSlice;
export default reducer;
const {SET_LOADER} = actions;

// Actions

export const setLoadingState = (loadingStatus) => (dispatch) => {
    dispatch(SET_LOADER(loadingStatus));
}

>>>>>>> 5c5e0c2267a681c0aafd53ea75e9395a8f70581d
