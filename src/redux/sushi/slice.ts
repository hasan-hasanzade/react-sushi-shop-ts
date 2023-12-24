import { createSlice } from '@reduxjs/toolkit';
import { SushiSliceState } from '../sushi/types';
import { fetchSushi, fetchSingleSushi } from './asyncActions';

const initialState: SushiSliceState = {
  items: [],
  singleItem: null,
  status: 'loading',
};

export const sushiSlice = createSlice({
  name: 'sushi',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSushi.pending, (state) => {
        state.status = 'loading';
        state.items = [];
      })
      .addCase(fetchSushi.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'success';
      })
      .addCase(fetchSushi.rejected, (state) => {
        state.status = 'error';
        state.items = [];
      })
      .addCase(fetchSingleSushi.pending, (state) => {
        state.status = 'loading';
        state.singleItem = null;
      })
      .addCase(fetchSingleSushi.fulfilled, (state, action) => {
        state.status = 'success';
        state.singleItem = action.payload;
      })
      .addCase(fetchSingleSushi.rejected, (state) => {
        state.status = 'error';
        state.singleItem = null;
      })
  },
});

export const { setItems } = sushiSlice.actions;

export default sushiSlice.reducer;
