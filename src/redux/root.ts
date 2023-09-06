import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import todosReducer from './list';
import filterReducer from './filter';
  
export const store = configureStore({
    reducer: {
        todos: todosReducer,
        filter: filterReducer,
    },
    middleware: [thunk],
  });