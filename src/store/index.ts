import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import userReducer from './slices/userSlice'; // 导入新的 userSlice

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer, // 添加 userSlice 的 reducer
  },
});
