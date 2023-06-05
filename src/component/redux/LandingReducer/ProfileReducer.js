import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    loggedIn: false,
  }
}

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addUserDetails: (state, action) => {
      state.login = action.payload;
    },
  },
})

export const { addUserDetails } = ProfileSlice.actions;

export default ProfileSlice.reducer;