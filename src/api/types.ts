// 通用 API 响应结构
export interface ApiResponse<T = any> {
  code: number;      // 状态码（如 200 表示成功）
  message: string;   // 描述信息
  data: T;           // 数据内容
}

// HTTP 方法枚举
export type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';
