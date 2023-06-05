import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import LandingReducer from './LandingReducer/LandingReducer'
import ProfileReducer from './LandingReducer/ProfileReducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['profile'],
}

const reducers = combineReducers({
  landing: LandingReducer,
  profile: ProfileReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
})