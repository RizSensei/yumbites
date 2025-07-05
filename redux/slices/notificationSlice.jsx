import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notifications: []
}

export const notificationSlice = createSlice({
    name:"notification",
    initialState,
    reducers:{
        addNotification: (state, action) => {
            const newNotification = {
                id: Date.now().toString(),
                timestamp: new Date().toISOString(),
                read: false,
                ...action.payload
            };
            state.notifications.unshift(newNotification);
        },
        markAsRead: (state, action) => {
            const notification = state.notifications.find(
                (item) => item.id === action.payload
            );
            if (notification) {
                notification.read = true;
            }
        },
        markAllAsRead: (state) => {
            state.notifications.forEach(notification => {
                notification.read = true;
            });
        },
        removeNotification: (state, action) => {
            state.notifications = state.notifications.filter(
                (item) => item.id !== action.payload
            );
        },
        clearNotifications: (state) => {
            state.notifications = [];
        },
    }
})

export const { 
    addNotification, 
    markAsRead, 
    markAllAsRead, 
    removeNotification, 
    clearNotifications 
} = notificationSlice.actions;

export const selectNotifications = (state) => state.notification.notifications;
export const selectUnreadCount = (state) => 
    state.notification.notifications.filter(notification => !notification.read).length;

export default notificationSlice.reducer;
