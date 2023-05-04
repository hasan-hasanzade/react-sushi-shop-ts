import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { FilterSliceState } from "./types";
import { SortPropertyEnum } from "./types";
import { Sort } from "./types";

const initialState: FilterSliceState = {
   searchValue: '',
   categoryId : 0,
   currentPage: 1,
   sort: {
      name: 'popular', 
      sortProperty: SortPropertyEnum.RATING_DESC
   }
}

export const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      setSearchValue(state, action: PayloadAction<string>) {
         state.searchValue = action.payload;
      },
      setCategoryId(state, action: PayloadAction<number>) {
         state.categoryId = action.payload;
      },
      setSort(state, action: PayloadAction<Sort>) {
         state.sort = action.payload;
      },
      setCurrentPage(state, action: PayloadAction<number>) {
         state.currentPage = action.payload;
      }
   }
})

export const { setCategoryId, setSort, setCurrentPage, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;