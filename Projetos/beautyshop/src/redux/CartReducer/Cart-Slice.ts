import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../data/products";

interface CartState {
  cart: Products[];
  cartOpen: boolean;
}

const initialState: CartState = {
  cart: [],
  cartOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cart = [...state.cart, action.payload];
      localStorage.setItem("products", JSON.stringify(state.cart));
    },
    removeProduct: (state, action) => {
      const filteredCart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      state.cart = filteredCart;
      localStorage.setItem("products", JSON.stringify(filteredCart));
    },
    clearCart: (state, action) => {
      state.cart = [];
    },
    toggleCart: (state) => {
      state.cartOpen = !state.cartOpen;
    },
    localStorageProducts: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  clearCart,
  toggleCart,
  localStorageProducts,
} = cartSlice.actions;
