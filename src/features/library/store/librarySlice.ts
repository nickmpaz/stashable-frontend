import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AsyncThunkStatus,
  LibraryItem,
  LibraryItemUpdate,
} from "../../../app/definitions/types";
import { RootState } from "../../../app/store/store";
import {
  createLibraryItemRequest,
  fetchLibraryItemRequest,
  fetchLibraryItemsRequest,
  updateLibraryItemRequest,
} from "../api/libraryApi";

export interface LibraryState {
  libraryItem: {
    value: LibraryItem | null;
    status: AsyncThunkStatus;
  };
  libraryItems: {
    value: LibraryItem[];
    status: AsyncThunkStatus;
  };
}

const initialState: LibraryState = {
  libraryItem: {
    value: null,
    status: AsyncThunkStatus.Idle,
  },
  libraryItems: {
    value: [],
    status: AsyncThunkStatus.Idle,
  },
};

export const createLibraryItem = createAsyncThunk(
  "library/createLibraryItem",
  async (id: number) => {
    const response = await createLibraryItemRequest(id);
    return response.data;
  }
);

export const updateLibraryItem = createAsyncThunk(
  "library/updateLibraryItem",
  async ({ id, updates }: { id: number; updates: LibraryItemUpdate }) => {
    const response = await updateLibraryItemRequest(id, updates);
    return response.data;
  }
);

export const fetchLibraryItem = createAsyncThunk(
  "library/fetchLibraryItem",
  async (id: number) => {
    const response = await fetchLibraryItemRequest(id);
    return response.data;
  }
);

export const fetchLibraryItems = createAsyncThunk(
  "library/fetchLibraryItems",
  async () => {
    const response = await fetchLibraryItemsRequest();
    return response.data;
  }
);

export const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      })
      .addCase(updateLibraryItem.pending, (state) => {
        state.libraryItem.status = AsyncThunkStatus.Loading;
      })
      .addCase(updateLibraryItem.rejected, (state) => {
        state.libraryItem.status = AsyncThunkStatus.Failed;
      })
      .addCase(updateLibraryItem.fulfilled, (state, action) => {
        state.libraryItem.status = AsyncThunkStatus.Idle;
        state.libraryItem.value = action.payload;
      })
      .addCase(fetchLibraryItems.pending, (state) => {
        state.libraryItems.status = AsyncThunkStatus.Loading;
      })
      .addCase(fetchLibraryItems.rejected, (state) => {
        state.libraryItems.status = AsyncThunkStatus.Failed;
      })
      .addCase(fetchLibraryItems.fulfilled, (state, action) => {
        state.libraryItems.status = AsyncThunkStatus.Idle;
        state.libraryItems.value = action.payload;
      });
  },
});

export const selectLibraryItem = (state: RootState) =>
  state.library.libraryItem.value;

export const selectLibraryItems = (state: RootState) =>
  state.library.libraryItems.value;

export default librarySlice.reducer;
