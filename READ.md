```shell
npx create-expo-app MyApp
cd MyApp
# 增加支持web平台
npx expo install react-dom react-native-web @expo/metro-runtime
# 底部导航
npm install @react-navigation/bottom-tabs react-native-vector-icons
npx expo start

npx expo export -p web


npx eas-cli
eas init
eas build -p android --profile development
eas submit -p android --profile production
```

```bazaar
npm install react-native-vector-icons
npm install react-native-linear-gradient
# 如果需要图片选择功能
npm install react-native-image-picker
```
