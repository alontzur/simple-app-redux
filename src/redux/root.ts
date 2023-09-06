import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import listReducer from './list';

export const store = configureStore({
    reducer: listReducer,
    middleware: [thunk],
  });