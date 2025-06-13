import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_BASE_URL || 'https://api.example.com',
  timeout: 10000,
});

instance.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
);

export default instance;
