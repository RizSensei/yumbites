import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favourites: []
}

export const favouriteSlice = createSlice({
    name:"favourite",
    initialState,
    reducers:{
        addToFavourites:(state, action) => {

        }
    }
})

export const {addToFavourites} = favouriteSlice.actions;

export default favouriteSlice.reducer;