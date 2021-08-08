import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../../app/store/store";
import firebase from "firebase";

export interface AuthState {
  authenticated: boolean;
  initialized: boolean;
  // user: firebase.User | null;
}

const initialState: AuthState = {
  authenticated: false,
  initialized: false,
  // user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state, action: PayloadAction<boolean>) => {
      const authenticated = action.payload;
      state.authenticated = authenticated;
      state.initialized = true;
      // state.user = user
    },
  },
});

export const { authenticate } = authSlice.actions;

export const selectAuthenticated = (state: RootState) =>
  state.auth.authenticated;
export const selectInitialized = (state: RootState) => state.auth.initialized;
// export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
