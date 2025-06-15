import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from "./Me/ProfileScreen";
import HomeStack from "./Home/HomeStack";
import ContactsStack from "./Contacts/ContactsStack";
import DiscoverStack from "./Discover/DiscoverStack";
import ProfileStack from "./Me/ProfileStack";

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
            <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false, title: '首页'}} />
            <Tab.Screen name="Contacts" component={ContactsStack} options={{ headerShown: false , title: '通讯录' }} />
            <Tab.Screen name="Discover" component={DiscoverStack} options={{ headerShown: false , title: '发现' }} />
            <Tab.Screen name="Profile" component={ProfileStack} options={{ headerShown: false , title: '我' }} />
        </Tab.Navigator>
    );
}
