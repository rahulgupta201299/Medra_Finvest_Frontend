import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const LandingSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
})

export const { increment } = LandingSlice.actions;

export default LandingSlice.reducer;