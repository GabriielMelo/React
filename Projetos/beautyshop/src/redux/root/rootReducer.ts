import { combineReducers } from "@reduxjs/toolkit";
import { cartSlice } from "../CartReducer/Cart-Slice";

export const rootReducer = combineReducers({
  cartReducer: cartSlice.reducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
