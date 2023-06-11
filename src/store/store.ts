import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import sortSlice from "./slices/sortSlice";

export const store = configureStore({
  reducer: {
    todos: todoSlice,
    sort: sortSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
