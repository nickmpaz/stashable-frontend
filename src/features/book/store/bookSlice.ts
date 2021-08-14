import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AsyncThunkStatus, Book } from "../../../app/definitions/types";
import { RootState } from "../../../app/store/store";
import { fetchBookRequest, fetchSearchResultsRequest } from "../api/bookApi";

export interface BookState {
  searchResults: {
    value: Book[];
    status: AsyncThunkStatus;
  };
  book: {
    value: Book | null;
    status: AsyncThunkStatus;
  };
}

const initialState: BookState = {
  searchResults: {
    value: [],
    status: AsyncThunkStatus.Idle,
  },
  book: {
    value: null,
    status: AsyncThunkStatus.Idle,
  },
};

export const fetchSearchResults = createAsyncThunk(
  "book/fetchSearchResults",
  async (query: string) => {
    const response = await fetchSearchResultsRequest(query);
    console.log({ response });
    return response.data;
  }
);
export const fetchBook = createAsyncThunk(
  "book/fetchBook",
  async (id: number) => {
    const response = await fetchBookRequest(id);
    return response.data;
  }
);
export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.searchResults.status = AsyncThunkStatus.Loading;
      })
      .addCase(fetchSearchResults.rejected, (state) => {
        state.searchResults.status = AsyncThunkStatus.Failed;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.searchResults.status = AsyncThunkStatus.Idle;
        state.searchResults.value = action.payload;
      })
      .addCase(fetchBook.pending, (state) => {
        state.book.status = AsyncThunkStatus.Loading;
      })
      .addCase(fetchBook.rejected, (state) => {
        state.book.status = AsyncThunkStatus.Failed;
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.book.status = AsyncThunkStatus.Idle;
        state.book.value = action.payload;
      });
  },
});

export const {} = bookSlice.actions;

export const selectSearchResults = (state: RootState) =>
  state.search.searchResults.value;
export const selectBook = (state: RootState) => state.book.book.value;

export default bookSlice.reducer;
