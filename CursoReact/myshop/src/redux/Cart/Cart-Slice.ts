import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../data/products";

interface CartState {
  cart: Product[];
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
      const cartFiltered = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      state.cart = cartFiltered;
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
