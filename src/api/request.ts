import apiClient from './index';
import {ApiResponse, RequestMethod} from './types';

/**
 * 发起网络请求
 * @param url - 请求地址
 * @param method - 请求方法
 * @param data - 请求体数据（可选）
 * @param params - 查询参数（可选）
 */
export async function request<T>(
    url: string,
    method: RequestMethod,
    data?: any,
    params?: any
): Promise<ApiResponse<T>> {
  try {
    const response = await apiClient({
      url,
      method,
      data,
      params,
    });

    // 假设后端返回结构包含 data、code、message 字段
    return {
      data: response.data as T,
      code: response.status,
      message: response.statusText,
    };
  } catch (error: any) {
    throw new Error(error.message || '网络请求失败');
  }
}
