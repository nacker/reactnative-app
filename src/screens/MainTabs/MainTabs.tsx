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
            screenOptions={({ route, navigation }) => {
                // 获取当前导航状态
                const state = navigation.getState();
                // 定义显示 TabBar 的顶层 Tab 页面名称
                const tabPageNames = ['Home', 'Contacts', 'Discover', 'Profile'];

                // 递归查找最内层路由
                const findInnermostRoute = (currentState: any) => {
                    if (currentState.routes && currentState.index !== undefined) {
                        const childRoute = currentState.routes[currentState.index];
                        if (childRoute.state) {
                            return findInnermostRoute(childRoute.state);
                        }
                        return childRoute;
                    }
                    return currentState;
                };

                const innermostRoute = findInnermostRoute(state);
                // 判断最内层路由是否为顶层 Tab 页面
                const isTabPage = tabPageNames.includes(innermostRoute.name);

                return {
                    headerShown: false,
                    tabBarActiveTintColor: '#007AFF',
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName = 'home';
                        switch (route.name) {
                            case 'Home':
                                iconName = 'home';
                                break;
                            case 'Contacts':
                                iconName = 'people';
                                break;
                            case 'Discover':
                                iconName = 'compass';
                                break;
                            case 'Profile':
                                iconName = 'person';
                                break;
                        }
                        return <Ionicons name={iconName as any} size={size} color={color} />;
                    },
                    // 若为顶层 Tab 页面则显示 TabBar，否则隐藏
                    tabBarStyle: isTabPage ? undefined : { display: 'none' },
                };
            }}
        >
            <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false, title: '首页' }} />
            <Tab.Screen name="Contacts" component={ContactsStack} options={{ headerShown: false, title: '通讯录' }} />
            <Tab.Screen name="Discover" component={DiscoverStack} options={{ headerShown: false, title: '发现' }} />
            <Tab.Screen name="Profile" component={ProfileStack} options={{ headerShown: false, title: '我' }} />
        </Tab.Navigator>
    );
}
