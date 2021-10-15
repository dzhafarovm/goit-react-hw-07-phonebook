import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
// import logger from 'redux-logger';

import { contactApi } from 'redux/Phonebook/ContactSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const middleware = [...getDefaultMiddleware(), contactApi.middleware];

const rootReducer = combineReducers({
  [contactApi.reducerPath]: contactApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);
