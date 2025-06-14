import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ContactsScreen from "./ContactsScreen";
import ChatScreen from "../Home/ChatScreen";

const Stack = createStackNavigator();

export default function ContactsStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Contacts"
            component={ContactsScreen}
            // options={{ headerShown: false}}
        />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}
