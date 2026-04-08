import { configureStore } from "@reduxjs/toolkit";
import cartReducer from  "../features/cart/cartSlice";
import authReducer from "../features/auth/authSlice";


console.log("STORE CREATED");

const store = configureStore({
  
  reducer: {
    cart: cartReducer,
    auth: authReducer, 
  },
});

export default store;