import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, registerAuth } from './operationsAuth';

const handlePending = state => {
  state.isLoading = true;
};
const handlePendingRefresh = state => {
  state.isLoading = true;
  state.isRefreshing = true;
};
const handleAuthorisationFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
};
const handleRejectedAuthorisation = (state, { payload }) => {
  state.error = payload;
};

const handleFulfilledLogout = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};
const handleFulfilledRefresh = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
const handleRejectedRefresh = state => {
  state.isRefreshing = false;
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(registerAuth.fulfilled, handleAuthorisationFulfilled)
      .addCase(logIn.fulfilled, handleAuthorisationFulfilled)
      .addCase(logOut.fulfilled, handleFulfilledLogout)
      .addCase(refreshUser.pending, handlePendingRefresh)
      .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
      .addCase(refreshUser.rejected, handleRejectedRefresh)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        handleRejectedAuthorisation
      ),
});

export const authReducer = authSlice.reducer;
