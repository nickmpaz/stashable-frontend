import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AsyncThunkStatus, Book } from "../../../app/definitions/types";
import { RootState } from "../../../app/store/store";
import { fetchBookRequest } from "../api/bookApi";

export interface BookState {
  book: {
    value: Book | null;
    status: AsyncThunkStatus;
  };
}

const initialState: BookState = {
  book: {
    value: null,
    status: AsyncThunkStatus.Idle,
  },
};

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

export const selectBook = (state: RootState) => state.book.book.value;

export default bookSlice.reducer;
