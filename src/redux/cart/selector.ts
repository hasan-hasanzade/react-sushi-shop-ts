import { RootState } from '../store';

export const cartSelector = (state: RootState) => state.cart;
export const singleSushiSelector = (state: RootState) => state.sushi.singleItem;
