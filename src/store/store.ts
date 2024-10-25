import { configureStore } from '@reduxjs/toolkit';
import companySlice from './companySlice';

const store = configureStore({
  reducer: {
    companySlice
  },
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch