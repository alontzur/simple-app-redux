import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Todo, TodoList } from '../types/types'

const initialState: TodoList = {
  todos: [
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
}

const listReducer = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload)
    },
    removeTodo: (state, action: PayloadAction<string>) => {
        const todoToRemove = state.todos.findIndex((todo) => todo.id === action.payload);
        state.todos.splice(todoToRemove, 1);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = listReducer.actions;

export default listReducer.reducer