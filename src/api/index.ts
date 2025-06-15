import axios, { AxiosRequestConfig } from 'axios';
import { Alert } from 'react-native';
import { store } from "../store";
import { clearToken } from "../store/slices/userSlice";

const instance = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_BASE_URL || 'https://api.example.com',
    timeout: 10000,
});

// 请求拦截器 - 自动注入 token
instance.interceptors.request.use(
    (config) => {
        const state = store.getState(); // 类型自动推导
        const token = state.user.token;

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        console.error('请求拦截失败:', error);
        return Promise.reject(error);
    }
);

// 响应拦截器 - 统一错误处理
instance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        const message =
            error?.response?.data?.message ||
            error.message ||
            '网络请求出错，请稍后再试';

        Alert.alert('网络错误', message);

        // 如果是 token 失效（例如返回 401），清除登录状态
        if (error?.response?.status === 401) {
            store.dispatch(clearToken());
        }

        return Promise.reject(error);
    }
);

export default instance;
