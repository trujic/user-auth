import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: "",
    user: null,
    redirectToHome: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null
    },
    getusername: (state, action) => {
      state.username = action.payload;
    },
    redirect: (state) => {
      state.redirectToHome = true;
    }
  },
})

export const { login, logout, getusername, redirect } = userSlice.actions;
export const selectUsername = (state) => state.user.username.value;
export const selectUser = (state) => state.user.user;
export const selectRedirectToHome = (state) => state.user.redirectToHome;
export default userSlice.reducer;
