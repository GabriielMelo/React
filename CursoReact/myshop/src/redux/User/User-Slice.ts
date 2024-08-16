import { createSlice } from "@reduxjs/toolkit";

interface User {
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};
  
export const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});
//Desestruturando os metodos e exportando para utilizar no dispatch
export const { login, logout } = UserSlice.actions;
