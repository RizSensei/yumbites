import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favourites: []
}

export const favouriteSlice = createSlice({
    name:"favourite",
    initialState,
    reducers:{
        addToFavourites:(state, action) => {
            const existingIndex = state.favourites.findIndex(
                (item) => item._id === action.payload._id
            );
            if (existingIndex === -1) {
                state.favourites.push(action.payload);
            }
        },
        removeFromFavourites: (state, action) => {
            state.favourites = state.favourites.filter(
                (item) => item._id !== action.payload._id
            );
        },
        clearFavourites: (state) => {
            state.favourites = [];
        },
    }
})

export const {addToFavourites, removeFromFavourites, clearFavourites} = favouriteSlice.actions;

export const selectFavourites = (state) => state.favourite.favourites;
export const selectFavouritesCount = (state) => state.favourite.favourites.length;
export const selectIsFavourite = (state, id) => 
    state.favourite.favourites.some(item => item._id === id);

export default favouriteSlice.reducer;