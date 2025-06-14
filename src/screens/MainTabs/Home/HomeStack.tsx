import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            // options={{ headerShown: false}}
        />
        <Stack.Screen name="Chat" component={ChatScreen} options={{headerShown:true}}/>
    </Stack.Navigator>
  );
}
