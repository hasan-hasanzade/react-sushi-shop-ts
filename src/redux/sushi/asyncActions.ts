import axios from 'axios';
import { CartItem } from '../cart/types';
import { FetchSushiArgs } from './types';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchSushi = createAsyncThunk('pizza/fetchPizzasStatus', 
  async (params: FetchSushiArgs) => {
  const { search, category, sortBy, currentPage } = params;

  const { data } = await axios.get<CartItem[]>(
    `https://641f2aa2ad55ae01ccb7d1f8.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=desc&${search}`,
  );


  return data as CartItem[];
});