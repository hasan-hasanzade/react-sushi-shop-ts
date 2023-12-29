import axios from 'axios';
import { CartItem } from '../cart/types';
import { FetchSushiArgs } from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSushi = createAsyncThunk(
  'sushi/fetchSushiStatus',
  async (params: FetchSushiArgs) => {
    const { search, category, sortBy, currentPage } = params;

    const { data } = await axios.get<CartItem[]>(
      `https://641f2aa2ad55ae01ccb7d1f8.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=desc&${search}`,
    );

    return data as CartItem[];
  },
);

export const fetchSingleSushi = createAsyncThunk('sushi/fetchSingleProduct', async (id: string) => {
  const { data } = await axios.get(`https://641f2aa2ad55ae01ccb7d1f8.mockapi.io/items/${id}`);
  return data as CartItem;
});
