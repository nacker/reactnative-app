import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DiscoverScreen from "./DiscoverScreen";

const Stack = createStackNavigator();

export default function DiscoverStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Discover"
            component={DiscoverScreen}
            // options={{ headerShown: false}}
        />
    </Stack.Navigator>
  );
}
