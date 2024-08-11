import { combineReducers } from "redux";
import { cartSlice } from "./Cart/Cart-Slice";
import { UserSlice } from "./User/User-Slice";

// Para centralizarmos nossos reducers, utilizamos a função combineReducers da biblioteca redux, e passamos dentro de um objeto os reducers que criamos
export const rootReducer = combineReducers({
  userReducer: UserSlice.reducer,
  cartReducer: cartSlice.reducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
