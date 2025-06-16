import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AboutUsScreen from "./aboutMe/aboutMe";
import ProfileScreen from "./ProfileScreen";
import { SettingsScreen } from "./Settings/SettingsScreen";
import FeedbackScreen from "./Feedback/FeedbackScreen";
import ProfileEditScreen from "./ProfileEdit/ProfileEditScreen";

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            // options={{ headerShown: false}}
        />
        <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} options={{headerShown: true}}/>
        <Stack.Screen name="Settings" component={SettingsScreen} options={{headerShown:true}}/>
        <Stack.Screen name="AboutUs" component={AboutUsScreen} options={{headerShown:true}}/>
        <Stack.Screen name="Feedback" component={FeedbackScreen} options={{headerShown:true}}/>

    </Stack.Navigator>
  );
}
