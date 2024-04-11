import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    total: 0,
  },
  reducers: {
    add(state, action) {
      const updatedCart = state.cartList.concat(action.payload); //Here we are adding a new product to cart
      const updateTotal = state.total + action.payload.price; //Updating the total price
      return { ...state, total: updateTotal, cartList: updatedCart };
    },
    remove(state, action) {
        const updatedCart = state.cartList.filter( item => item.id !== action.payload.id); //Filtering the elements that are NOT equal to the one i am looking
        const updateTotal = state.total - action.payload.price;
        return { ...state, total: updateTotal, cartList: updatedCart };
    },
  },
});

export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
