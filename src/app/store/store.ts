import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "../../features/auth/store/authSlice";
import searchReducer from "../../features/search/store/searchSlice";
import bookReducer from "../../features/book/store/bookSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReducer,
    book: bookReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;