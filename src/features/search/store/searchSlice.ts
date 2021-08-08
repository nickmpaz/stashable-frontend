import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AsyncThunkStatus, Book } from "../../../app/definitions/types";
import { RootState } from "../../../app/store/store";
import { fetchSearchResultsRequest } from "../api/searchApi";

export interface SearchState {
  searchResults: {
    value: Book[];
    status: AsyncThunkStatus;
  };
}

const initialState: SearchState = {
  searchResults: {
    value: [],
    status: AsyncThunkStatus.Idle,
  },
};

export const fetchSearchResults = createAsyncThunk(
  "search/fetchSearchResults",
  async (query: string) => {
    const response = await fetchSearchResultsRequest(query);
    console.log({ response });
    return response.data;
  }
);

export const searchSlice = createSlice({
  name: "counter",
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
      });
  },
});

export const {} = searchSlice.actions;

export const selectSearchResults = (state: RootState) =>
  state.search.searchResults.value;

export default searchSlice.reducer;
