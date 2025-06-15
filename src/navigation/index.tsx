import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from "../screens/user/LoginScreen";
import MainTabs from "../screens/MainTabs/MainTabs";


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen}  options={{ title : '登录'}} />
            <Stack.Screen name="MainTabs" component={MainTabs} />

        </Stack.Navigator>
    );
}
