import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../data/products";

interface CartState {
  cart: Products[];
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeProduct: (state, action) => {
      const filteredCart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      state.cart = filteredCart;
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
