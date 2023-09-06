import { createSlice } from '@reduxjs/toolkit';

const initialState: boolean = false;

const filterReducer = createSlice({
  name: 'list',
  initialState,
  reducers: {
    toggleFilter: (state) => {
      return !state
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleFilter } = filterReducer.actions;

export default filterReducer.reducer;