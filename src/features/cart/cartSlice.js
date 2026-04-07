import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart(state, action) {
      const item = action.payload;

      const existingItem = state.items.find(
        i => i.id === item.id
      );

      if (existingItem) {
        state.items = state.items.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      } else {
        state.items = [...state.items, { ...item, quantity: 1 }];
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },

    updateQuantity(state, action) {
      const { id, quantity } = action.payload;

      if (quantity === undefined || quantity === null) return;

      const existingItem = state.items.find(item => item.id === id);

      if (!existingItem) return;

      if (quantity <= 0) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity = quantity;
      }
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;