import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import sidebarReducer from './slices/sidebarSlice';
import homeReducer from './slices/homeSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
    home: homeReducer,
  },
});

export default store;
