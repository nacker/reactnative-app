import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
    const handleLogout = () => {
        Alert.alert('退出登录', '确定要退出吗？', [
            { text: '取消', style: 'cancel' },
            {
                text: '退出',
                style: 'destructive',
                onPress: () => {
                    // TODO: 清理登录状态 & 跳转登录页
                    console.log('退出登录');
                },
            },
        ]);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.group}>
                <SettingItem icon="person" label="账号与安全" onPress={() => {}} />
            </View>

            <View style={styles.group}>
                <SettingItem icon="chatbox" label="新消息通知" onPress={() => {}} />
                <SettingItem icon="lock-closed" label="隐私" onPress={() => {}} />
                <SettingItem icon="image" label="通用" onPress={() => {}} />
            </View>

            <View style={styles.group}>
                <SettingItem icon="help-circle" label="帮助与反馈" onPress={() => {}} />
                <SettingItem icon="information-circle" label="关于微信" onPress={() => {}} />
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
                    <Text style={styles.logoutText}>退出登录</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

function SettingItem({
                         icon,
                         label,
                         onPress,
                     }: {
    icon: string;
    label: string;
    onPress?: () => void;
}) {
    return (
        <TouchableOpacity style={styles.item} onPress={onPress}>
            <View style={styles.itemRow}>
                <Ionicons name={icon as any} size={22} color="#4f4f4f" style={{ width: 28 }} />
                <Text style={styles.itemText}>{label}</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#ccc" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efefef',
    },
    group: {
        marginTop: 12,
        backgroundColor: '#fff',
        paddingLeft: 16,
    },
    item: {
        paddingVertical: 14,
        paddingRight: 16,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemText: {
        fontSize: 16,
    },
    footer: {
        marginTop: 24,
        alignItems: 'center',
    },
    logoutBtn: {
        backgroundColor: '#fff',
        width: '90%',
        paddingVertical: 14,
        alignItems: 'center',
        borderRadius: 8,
    },
    logoutText: {
        fontSize: 16,
        color: 'red',
        fontWeight: '500',
    },
});
