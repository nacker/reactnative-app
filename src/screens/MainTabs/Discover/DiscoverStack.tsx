import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DiscoverScreen from "./DiscoverScreen";
import ImageBrowserScreen from "../../../components/BrowserScreen/ ImageBrowserScreen";
import {RootStackParamList} from "../../../types/navigation.type";


const Stack = createStackNavigator<RootStackParamList>();

export default function DiscoverStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Discover" component={DiscoverScreen} />
            <Stack.Screen name="ImageBrowser" component={ImageBrowserScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
