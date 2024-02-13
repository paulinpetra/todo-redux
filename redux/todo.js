import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    currentTodoText: "", // New state for the current todo text
  },
  reducers: {
    addTodo: (state, action) => {
      const { text } = action.payload;
      state.todos.push({ id: uuidv4(), text, isCompleted: false });
    },
    toggleTodo: (state, action) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      if (todoIndex >= 0) {
        state.todos[todoIndex].isCompleted =
          !state.todos[todoIndex].isCompleted;
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateText: (state, action) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (todoIndex >= 0) {
        state.todos[todoIndex].text = action.payload.text;
      }
    },
    updateCurrentTodoText: (state, action) => {
      // Update the currentTodoText with the new value
      state.currentTodoText = action.payload;
    },
  },
});

// Export the action creators for the reducers
export const {
  addTodo,
  toggleTodo,
  removeTodo,
  updateText,
  updateCurrentTodoText,
} = todosSlice.actions;

export default todosSlice.reducer;
