import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AboutUsScreen from "./aboutMe/aboutMe";
import ProfileScreen from "./ProfileScreen";
import { SettingsScreen } from "./Settings/SettingsScreen";

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            // options={{ headerShown: false}}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{headerShown:true}}/>
        <Stack.Screen name="AboutUs" component={AboutUsScreen} options={{headerShown:true}}/>
    </Stack.Navigator>
  );
}
