// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter-slice';
import authReducer from './slice/auth-slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
