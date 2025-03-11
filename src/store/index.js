import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [] };
const cartSlice = createSlice({
  name: "Cart",
  initialState: initialCartState,
  reducers: {
    addQuantity(state, action) {
      if (
        state.items.findIndex((item) => item.id === action.payload.id) !== -1
      ) {
        const item = state.items.find((item) => item.id === action.payload.id);
        item.quantity++;
      } else {
        const newItem = action.payload;
        newItem.quantity = 1;
        state.items.push(newItem);
      }
    },
    reduceQuantity(state, action) {
      const cartItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (cartItem.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        // console.log("updatedItems", updatedItems);
      } else cartItem.quantity--;
    },
  },
});
const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
const store = configureStore({
  reducer: { cart: cartSlice.reducer, ui: uiSlice.reducer },
});
export const uiActions = uiSlice.actions;
export const cartActions = cartSlice.actions;
export default store;
