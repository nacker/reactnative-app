import React, {useEffect, useLayoutEffect} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";

export default function DiscoverScreen({ navigation, route }: { navigation: any, route: any }) {
    // 动态设置标题
    useEffect(() => {
        navigation.setOptions({
            title: route.params?.title || '发现',
            headerTitleAlign: 'center',
        });
    }, [navigation, route.params]);

    // 发现页功能列表数据（分组）
    const discoverGroups = [
        {
            title: '社交',
            items: [
                {
                    id: 'moments',
                    name: '朋友圈',
                    icon: require('../../../assets/discover/video.png'),
                    showArrow: true,
                    onPress: () => console.log('朋友圈'),
                },
                {
                    id: 'channels',
                    name: '视频号',
                    icon: require('../../../assets/discover/video.png'),
                    showArrow: true,
                    badge: 'New',
                    onPress: () => console.log('视频号'),
                },
            ],
        },
        {
            title: '工具',
            items: [
                {
                    id: 'scan',
                    name: '扫一扫',
                    icon: require('../../../assets/discover/qr-code.png'),
                    showArrow: true,
                    onPress: () => console.log('扫一扫'),
                },
                {
                    id: 'shake',
                    name: '摇一摇',
                    icon: require('../../../assets/discover/shake-phone.png'),
                    showArrow: true,
                    onPress: () => console.log('摇一摇'),
                },
                {
                    id: 'nearby',
                    name: '附近的人',
                    icon: require('../../../assets/discover/near-me.png'),
                    showArrow: true,
                    onPress: () => console.log('附近的人'),
                },
            ],
        },
        {
            title: '娱乐',
            items: [
                {
                    id: 'shopping',
                    name: '购物',
                    icon: require('../../../assets/discover/video.png'),
                    showArrow: true,
                    onPress: () => console.log('购物'),
                },
                {
                    id: 'games',
                    name: '游戏',
                    icon: require('../../../assets/discover/shopping-bag.png'),
                    showArrow: true,
                    badge: '热',
                    onPress: () => console.log('游戏'),
                },
                {
                    id: 'miniPrograms',
                    name: '小程序',
                    icon: require('../../../assets/discover/shopping-bag.png'),
                    showArrow: true,
                    onPress: () => console.log('小程序'),
                },
            ],
        },
    ];
    const shouldShowGroupHeader = false; // 根据业务逻辑动态设置

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {discoverGroups.map((group, groupIndex) => (
                    <React.Fragment key={group.title}>
                        {/* 渲染组标题 */}

                        {shouldShowGroupHeader && (
                            <View style={styles.groupHeader}>
                                <Text style={styles.groupHeaderText}>{group.title}</Text>
                            </View>
                        )}

                        {/* 渲染组内子项 */}
                        {group.items.map((item, index) => (
                            <React.Fragment key={item.id}>
                                <TouchableOpacity
                                    style={styles.itemContainer}
                                    onPress={item.onPress}
                                    activeOpacity={0.7}
                                >
                                    <View style={styles.itemContent}>
                                        <Image
                                            source={typeof item.icon === 'string' ? { uri: item.icon } : item.icon}
                                            style={styles.itemIcon}
                                        />
                                        <Text style={styles.itemText}>{item.name}</Text>
                                        {item.badge && (
                                            <View style={styles.badge}>
                                                <Text style={styles.badgeText}>{item.badge}</Text>
                                            </View>
                                        )}
                                        {item.showArrow && (
                                            <Image
                                                source={{ uri: 'https://img.icons8.com/ios/50/chevron-right.png' }}
                                                style={styles.arrowIcon}
                                            />
                                        )}
                                    </View>
                                </TouchableOpacity>
                                {index < group.items.length - 1 && <View style={styles.divider} />}
                            </React.Fragment>
                        ))}
                        {groupIndex < discoverGroups.length - 1 && <View style={styles.groupDivider} />}
                    </React.Fragment>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDEDED',
    },
    scrollView: {
        marginTop: 10,
    },
    groupHeader: {
        backgroundColor: '#F7F7F7',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    groupHeaderText: {
        fontSize: 14,
        color: '#666666',
        fontWeight: '500',
    },
    groupDivider: {
        height: 10,
        backgroundColor: '#EDEDED',
    },
    itemContainer: {
        backgroundColor: '#FFFFFF',
    },
    itemContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 16,
    },
    itemIcon: {
        width: 22,
        height: 22,
        marginRight: 16,
        tintColor: '#2A2A2A',
    },
    itemText: {
        flex: 1,
        fontSize: 16,
        color: '#1A1A1A',
    },
    arrowIcon: {
        width: 14,
        height: 14,
        tintColor: '#C7C7CC',
    },
    divider: {
        height: 0.5,
        backgroundColor: '#E5E5E5',
        marginLeft: 54,
        marginRight: 16,
    },
    badge: {
        backgroundColor: '#FA5151',
        borderRadius: 8,
        paddingHorizontal: 4,
        paddingVertical: 1,
        marginRight: 8,
        minWidth: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    badgeText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '500',
    },
});
