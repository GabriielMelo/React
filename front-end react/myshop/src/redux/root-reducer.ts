import { combineReducers } from "redux";
import { userReducer } from "./UserReducer/Reducer";

// Para centralizarmos nossos reducers, utilizamos a função combineReducers da biblioteca redux, e passamos dentro de um objeto os reducers que criamos
export const rootReducer = combineReducers({
  userReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
