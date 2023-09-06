import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../types/types'

const initialState: Todo[] = [
    {
        id: '1',
        text: 'task number 1',
        isComplete: false
    },
    {
        id: '2',
        text: 'task number 2',
        isComplete: true
    },
  ]

const todosReducer = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addTodo: (todos, action: PayloadAction<Todo>) => {
      todos.push(action.payload)
    },
    removeTodo: (todos, action: PayloadAction<string>) => {
        const todoToRemove = todos.findIndex((todo) => todo.id === action.payload);
        todos.splice(todoToRemove, 1);
    },
    toggleTodo: (todos, action: PayloadAction<string>) => {
        const todoToToggle = todos.find((todo) => todo.id === action.payload);
        if (todoToToggle) todoToToggle.isComplete = !todoToToggle?.isComplete;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, toggleTodo } = todosReducer.actions;

export default todosReducer.reducer;