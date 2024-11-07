import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import favouriteSlice from './slices/favouriteSlice'
import notificationSlice from './slices/notificationSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    favourite: favouriteSlice,
    notification: notificationSlice
  },
})