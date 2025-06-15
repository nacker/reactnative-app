import React, {useLayoutEffect} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AboutUsScreen({ navigation, route }: {navigation: any, route: any}) {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: '关于我们',
            headerTitleAlign: 'center',
        });
    }, [navigation]);

    // 显式指定 url 参数的类型为 string
    const openLink = (url: string) => {
        Linking.openURL(url).catch(err => console.error('无法打开链接:', err));
    };

    return (
        // 新增外层容器
        <View style={styles.outerContainer}>
            <ScrollView style={styles.container}>
                {/* 应用Logo和名称 */}
                <View style={styles.header}>
                    <Image
                        source={require('../../../../assets/app-logo.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.appName}>我的应用</Text>
                    <Text style={styles.version}>版本 1.0.0</Text>
                </View>

                {/* 关于内容 */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>关于我们</Text>
                    <Text style={styles.description}>
                        我们是一支充满激情的团队，致力于为用户提供最好的移动应用体验。
                        我们的应用旨在解决您日常生活中的问题，让生活更加便捷。
                    </Text>
                </View>

                {/* 团队信息 */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>我们的团队</Text>
                    <View style={styles.teamMember}>
                        <Image
                            source={require('../../../../assets/app-logo.png')}
                            style={styles.memberImage}
                        />
                        <View style={styles.memberInfo}>
                            <Text style={styles.memberName}>张三</Text>
                            <Text style={styles.memberRole}>创始人 & CEO</Text>
                        </View>
                    </View>
                    <View style={styles.teamMember}>
                        <Image
                            source={require('../../../../assets/app-logo.png')}
                            style={styles.memberImage}
                        />
                        <View style={styles.memberInfo}>
                            <Text style={styles.memberName}>李四</Text>
                            <Text style={styles.memberRole}>首席技术官</Text>
                        </View>
                    </View>
                </View>

                {/* 联系方式 */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>联系我们</Text>
                    <View style={styles.contactItem}>
                        <Ionicons name="mail" size={20} color="#333" />
                        <Text
                            style={styles.contactText}
                            onPress={() => openLink('mailto:support@myapp.com')}
                        >
                            support@myapp.com
                        </Text>
                    </View>
                    <View style={styles.contactItem}>
                        <Ionicons name="globe" size={20} color="#333" />
                        <Text
                            style={styles.contactText}
                            onPress={() => openLink('https://www.myapp.com')}
                        >
                            www.myapp.com
                        </Text>
                    </View>
                    <View style={styles.contactItem}>
                        <Ionicons name="logo-twitter" size={20} color="#1DA1F2" />
                        <Text
                            style={styles.contactText}
                            onPress={() => openLink('https://twitter.com/myapp')}
                        >
                            @myapp
                        </Text>
                    </View>
                </View>
            </ScrollView>
            {/* 将 footer 移到 ScrollView 外部 */}
            <View style={styles.footer}>
                <Text style={styles.copyright}>© 2025 我的应用. 保留所有权利.</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    // 新增外层容器样式
    outerContainer: {
        flex: 1,
        position: 'relative',
    },
    container: {
        // 移除 flex: 1
        backgroundColor: '#fff',
        padding: 20,
        // 添加底部内边距，避免内容被 footer 遮挡
        paddingBottom: 40,
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 20,
        marginBottom: 10,
    },
    appName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    version: {
        fontSize: 14,
        color: '#888',
        marginTop: 5,
    },
    section: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingBottom: 5,
    },
    description: {
        fontSize: 15,
        lineHeight: 22,
        color: '#555',
    },
    teamMember: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    memberImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15,
    },
    memberInfo: {
        flex: 1,
    },
    memberName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
    },
    memberRole: {
        fontSize: 14,
        color: '#777',
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    contactText: {
        fontSize: 15,
        color: '#333',
        marginLeft: 10,
        textDecorationLine: 'underline',
    },
    footer: {
        // 绝对定位到底部
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: '#987654',
    },
    copyright: {
        fontSize: 12,
        color: '#999',
    },
});
