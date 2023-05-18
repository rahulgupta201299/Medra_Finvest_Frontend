import { configureStore } from '@reduxjs/toolkit'
import LandingReducer from './LandingReducer/LandingReducer'

export const store = configureStore({
  reducer: {
	landing: LandingReducer,
  },
})