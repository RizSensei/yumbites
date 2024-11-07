import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notifications: []
}

export const notificationSlice = createSlice({
    name:"notification",
    initialState,
    reducers:{
        generateNotifications:(state, action) => {

        }
    }
})

export const {generateNotifications} = notificationSlice.actions;

export default notificationSlice.reducer;
