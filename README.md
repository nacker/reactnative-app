# React Native App

一个基于 React Native + Expo 开发的移动应用程序，提供类似社交通讯软件的功能界面。

## 技术栈

- React Native v0.79.3
- Expo v53.0.11
- React Navigation v7
- Redux Toolkit
- TypeScript
- React Native Paper
- Axios

## 主要功能

该应用程序包含以下主要功能模块：

### 1. 主页/聊天

- 聊天列表展示
- 一对一聊天功能
- 消息实时更新

### 2. 发现页

包含多个功能入口：
- 朋友圈
- 视频号
- 扫一扫
- 摇一摇
- 附近的人
- 购物
- 游戏
- 小程序

### 3. 通讯录

- 联系人列表管理
- 联系人信息展示

### 4. 个人中心

- 用户信息展示
- 设置
- 关于

## 项目结构

```
src/
├── api/                # API 接口和网络请求
├── assets/            # 静态资源文件
├── components/        # 可复用组件
├── constants/         # 常量定义
├── hooks/             # 自定义 Hooks
├── navigation/        # 导航配置
├── screens/           # 页面组件
│   ├── MainTabs/     # 主要标签页
│   ├── SplashScreen  # 启动页
│   └── user/         # 用户相关页面
├── store/            # Redux 状态管理
├── themes/           # 主题配置
└── utils/            # 工具函数
```

## 开始使用

### 环境要求

- Node.js >= 14
- npm 或 yarn
- iOS/Android 开发环境

### 安装

```bash
# 安装依赖
npm install

# 启动开发服务器
npm start

# 运行 iOS 版本
npm run ios

# 运行 Android 版本
npm run android

# 运行 Web 版本
npm run web
```

## 开发

项目使用 TypeScript 进行开发，采用了模块化的架构设计。主要特点：

1. 使用 React Navigation 进行路由管理
2. 使用 Redux Toolkit 进行状态管理
3. 使用 Axios 处理网络请求
4. 支持主题定制
5. 完整的 TypeScript 类型支持

## 项目特点

- 📱 跨平台支持 (iOS, Android, Web)
- 🎨 统一的设计风格
- 🔒 类型安全
- 🚀 性能优化
- 📦 模块化架构

## 贡献

欢迎提交 Issue 和 Pull Request。

## 许可证

[MIT License](LICENSE)
