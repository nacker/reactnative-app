import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import HomeScreen from "./Home/HomeScreen";
import ContactsScreen from "./Contacts/ContactsScreen";
import DiscoverScreen from "./Discover/DiscoverScreen";
import ProfileScreen from "./Me/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#007AFF',
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = 'home-outline';
                    if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
                    if (route.name === 'Contacts') iconName = focused ? 'people' : 'people-outline';
                    if (route.name === 'Discover') iconName = focused ? 'compass' : 'compass-outline';
                    if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';
                    return <Ionicons name={iconName as any} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ title: '首页' }} />
            <Tab.Screen name="Contacts" component={ContactsScreen} options={{ title: '通讯录' }} />
            <Tab.Screen name="Discover" component={DiscoverScreen} options={{ title: '发现' }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: '我' }} />
        </Tab.Navigator>
    );
}
