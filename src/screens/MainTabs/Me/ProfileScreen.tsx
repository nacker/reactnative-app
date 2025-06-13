import React, {useLayoutEffect} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
    const navigation = useNavigation<any>();
    useLayoutEffect(() => {
        navigation.setOptions({
            title: '我的',
            headerTitleAlign: 'center',
        });
    }, [navigation]);

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://i.pravatar.cc/100' }}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>小明</Text>
                    <Text style={styles.wechatId}>微信号: xm123456</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#ccc" />
            </TouchableOpacity>

            <View style={styles.group}>
                <MenuItem icon="bookmark" label="收藏" />
                <MenuItem icon="image" label="相册" />
                <MenuItem icon="card" label="卡包" />
                <MenuItem icon="happy" label="表情" />
            </View>

            <View style={styles.group}>
                <MenuItem icon="settings" label="设置" onPress={() => navigation.navigate('Settings')} />
            </View>
        </ScrollView>
    );
}

function MenuItem({
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
    container: { flex: 1, backgroundColor: '#efefef' },
    profile: {
        flexDirection: 'row', alignItems: 'center',
        backgroundColor: '#fff', padding: 16, marginBottom: 12,
    },
    avatar: { width: 64, height: 64, borderRadius: 8, marginRight: 16 },
    profileInfo: { flex: 1 },
    name: { fontSize: 18, fontWeight: '600', marginBottom: 4 },
    wechatId: { color: '#888', fontSize: 14 },
    group: { marginTop: 10, backgroundColor: '#fff', paddingLeft: 16 },
    item: {
        paddingVertical: 14, paddingRight: 16,
        borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#eee',
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    },
    itemRow: { flexDirection: 'row', alignItems: 'center' },
    itemText: { fontSize: 16 },
});
