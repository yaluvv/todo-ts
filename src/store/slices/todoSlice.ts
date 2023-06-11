import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoType } from "../../types/types";

type TodoStateType = {
  items: TodoType[] | [];
};

const initialState: TodoStateType = {
  items: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos") as string)
    : [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoType>) => {
      state.items = [...state.items, action.payload];
      localStorage.setItem("todos", JSON.stringify(state.items));
    },
    checkTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, checked: !item.checked }
          : item
      );
      localStorage.setItem("todos", JSON.stringify(state.items));
    },
    removeTodo: (state, action: PayloadAction<TodoType>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    removeAllCheckedTodo: (state) => {
      state.items = state.items.filter((item) => !item.checked);
      localStorage.setItem("todos", JSON.stringify(state.items));
    },
    removeAllTodo: (state) => {
      state.items = [];
      localStorage.removeItem("todos");
    },
  },
});

export const {
  addTodo,
  checkTodo,
  removeTodo,
  removeAllCheckedTodo,
  removeAllTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
