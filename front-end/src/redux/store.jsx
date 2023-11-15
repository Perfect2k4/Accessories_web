import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "features/counter/counterSlice";
import userReducer from "./slides/userSlide";

export const store = configureStore({
  reducer: { counter: counterSlice, user: userReducer },
});
