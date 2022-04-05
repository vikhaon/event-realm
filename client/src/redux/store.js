import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

export default store;
