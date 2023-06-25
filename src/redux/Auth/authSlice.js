import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, registerAuth } from './operationsAuth';

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
      .addCase(registerAuth.pending, (state, action) => {
        return state;
      })
      .addCase(registerAuth.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerAuth.rejected, (state, action) => {
        return state;
      })
      .addCase(logIn.pending, (state, action) => {
        return state;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        return state;
      }).addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      }).addCase(refreshUser.fulfilled, (state, action)=> {
        state.user = action.payload;
        state.isLoggedIn = true;
      }),
});

export const authReducer = authSlice.reducer;
