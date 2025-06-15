import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 定义用户信息的接口
export interface UserInfo {
    id: string;
    name: string;
    email: string;
    // 根据实际需求扩展其他字段
}

// 定义初始状态
interface UserState {
    token: string | null;
    userInfo: UserInfo | null;
}

const initialState: UserState = {
    token: null,
    userInfo: null,
};

// 创建 userSlice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // 设置用户的 token
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        // 清除用户的 token
        clearToken: state => {
            state.token = null;
        },
        // 设置用户信息
        setUserInfo: (state, action: PayloadAction<UserInfo>) => {
            state.userInfo = action.payload;
        },
        // 清除用户信息
        clearUserInfo: state => {
            state.userInfo = null;
        },
        // 登出操作（清除所有用户相关数据）
        logout: state => {
            state.token = null;
            state.userInfo = null;
        },
    },
});

// 导出 actions
export const { setToken, clearToken, setUserInfo, clearUserInfo, logout } = userSlice.actions;

// 导出 reducer
export default userSlice.reducer;
