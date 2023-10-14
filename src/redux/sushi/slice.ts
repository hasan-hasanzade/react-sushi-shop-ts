import { createSlice } from '@reduxjs/toolkit';
import { SushiSliceState } from '../sushi/types';
import { fetchSushi } from './asyncActions';

const initialState: SushiSliceState = {
  items: [],
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
      });
  },
});

export const { setItems } = sushiSlice.actions;

export default sushiSlice.reducer;
