import { createSlice } from "@reduxjs/toolkit";

//create our todoSlice
// createSlice allow you write immutable "mutating" logic
// because it uses immer under the hood
const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    // our reducers
    // reducer function takes state and action as parameters
    addTodo: (todos, action) => {
      todos.push(action.payload);
    },

    updateTodo: (todos, action) => {
      const todoIndex = todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (todoIndex !== -1) {
        todos[todoIndex] = action.payload; // action.payload is updated todo
      }
    },

    deleteTodo: (todos, action) => {
      console.log(todos, action);
      return todos.filter((todo) => todo.id !== Number(action.payload));
    },
    toggleTodo: (todos, action) => {
      const todoIndex = todos.findIndex(
        (todo) => todo.id === Number(action.payload)
      );
      if (todoIndex !== -1) {
        todos[todoIndex].completed = !todos[todoIndex].completed;
      }
    },
  },
});

// Export generated action creators and the reducer
// function for the whole slice
export const { addTodo, updateTodo, deleteTodo, toggleTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
