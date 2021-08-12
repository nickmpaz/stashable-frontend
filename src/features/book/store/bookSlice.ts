import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AsyncThunkStatus,
  Book,
  LibraryItem,
} from "../../../app/definitions/types";
import { RootState } from "../../../app/store/store";
import {
  createLibraryItemRequest,
  fetchBookRequest,
  fetchLibraryItemRequest,
} from "../api/bookApi";

export interface BookState {
  book: {
    value: Book | null;
    status: AsyncThunkStatus;
  };
  libraryItem: {
    value: LibraryItem | null;
    status: AsyncThunkStatus;
  };
}

const initialState: BookState = {
  book: {
    value: null,
    status: AsyncThunkStatus.Idle,
  },
  libraryItem: {
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

export const createLibraryItem = createAsyncThunk(
  "book/createLibraryItem",
  async (id: number) => {
    const response = await createLibraryItemRequest(id);
    return response.data;
  }
);

export const fetchLibraryItem = createAsyncThunk(
  "book/fetchLibraryItem",
  async (id: number) => {
    const response = await fetchLibraryItemRequest(id);
    console.log({ response });
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
      })
      .addCase(createLibraryItem.pending, (state) => {
        state.libraryItem.status = AsyncThunkStatus.Loading;
      })
      .addCase(createLibraryItem.rejected, (state) => {
        state.libraryItem.status = AsyncThunkStatus.Failed;
      })
      .addCase(createLibraryItem.fulfilled, (state, action) => {
        state.libraryItem.status = AsyncThunkStatus.Idle;
        state.libraryItem.value = action.payload;
      })
      .addCase(fetchLibraryItem.pending, (state) => {
        state.libraryItem.status = AsyncThunkStatus.Loading;
      })
      .addCase(fetchLibraryItem.rejected, (state) => {
        state.libraryItem.status = AsyncThunkStatus.Failed;
      })
      .addCase(fetchLibraryItem.fulfilled, (state, action) => {
        state.libraryItem.status = AsyncThunkStatus.Idle;
        state.libraryItem.value = action.payload;
        console.log(action.payload);
      });
  },
});

export const {} = bookSlice.actions;

export const selectBook = (state: RootState) => state.book.book.value;
export const selectLibraryItem = (state: RootState) =>
  state.book.libraryItem.value;

export default bookSlice.reducer;
