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
                    let iconName = 'home';
                    switch (route.name) {
                        case 'Home': iconName = 'home'; break;
                        case 'Contacts': iconName = 'people'; break;
                        case 'Discover': iconName = 'compass'; break;
                        case 'Profile': iconName = 'person'; break;
                    }
                    return <Ionicons name={iconName as any} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: true, title: '首页'}} />
            <Tab.Screen name="Contacts" component={ContactsScreen} options={{ headerShown: true , title: '通讯录' }} />
            <Tab.Screen name="Discover" component={DiscoverScreen} options={{ headerShown: true , title: '发现' }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: true , title: '我' }} />
        </Tab.Navigator>
    );
}
