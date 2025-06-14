import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from "../screens/user/LoginScreen";
import MainTabs from "../screens/MainTabs/MainTabs";
import SettingsScreen from "../screens/MainTabs/Me/Settings/SettingsScreen";
import ChatScreen from "../screens/MainTabs/Home/ChatScreen";


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen}  options={{ title : '登录'}} />
            <Stack.Screen name="MainTabs" component={MainTabs} />
            <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: true ,title: '设置' }} />
            {/*<Stack.Screen name="Chat" component={ChatScreen} /> /!* 必须存在此行 *!/*/}

        </Stack.Navigator>
    );
}
