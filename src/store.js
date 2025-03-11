import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './components/CartReducer'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
