import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let itemIndex = state.items.findIndex(
        (item) => item.name === action.payload.name
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      let itemIndex = state.items.findIndex(
        (item) => item.name === action.payload.name
      );
      if (itemIndex >= 0) {
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= 1;
        } else {
          state.items.splice(itemIndex, 1);
        }
      } else {
        console.log("Can't remove item");
      }
    },
    removeDish: (state, action) => {
      console.log("..........action", action);
      state.items.splice(action.payload, 1);
    },
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart, removeDish } =
  cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectCartTotal = (state) =>
  state.cart.items
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

export const selectCartLength = (state) => state.cart.items.length;

export const selectDishCountInCart = (state, id) => {
  const dishExist = state.cart.items.find((item) => (item.id = id));
  return dishExist ? item.quantity : 0;
};

export default cartSlice.reducer;
