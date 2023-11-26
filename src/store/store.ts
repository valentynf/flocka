import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import sidebarReducer from './slices/sidebarSlice';
import homeReducer from './slices/homeSlice';
import appDataReducer from './slices/appDataSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    app_data: appDataReducer,
    sidebar: sidebarReducer,
    home: homeReducer,
  },
});

export default store;
