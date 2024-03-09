import { configureStore } from '@reduxjs/toolkit';
import { ENV } from '../env';
import { reducer } from './reducer';

export const STORE = configureStore({
  reducer,
  devTools: !ENV.IS_PRODUCTION,
});

export type AppDispatch = typeof STORE.dispatch;
export type IRootStore = ReturnType<typeof STORE.getState>;
