import { configureStore } from "@reduxjs/toolkit";
import cartReducer from  "../features/cart/cartSlice";


console.log("STORE CREATED");

const store = configureStore({
  
  reducer: {
    cart: cartReducer,
  },
});

export default store;