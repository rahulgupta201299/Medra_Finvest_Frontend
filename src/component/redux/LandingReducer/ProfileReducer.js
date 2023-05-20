import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  mobileNo: '',
  loggedIn: false,
}

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
   
  },
})

export const {  } = ProfileSlice.actions;

export default ProfileSlice.reducer;