import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView, Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// 定义用户资料类型
interface ProfileDataType {
    name: string;
    bio: string;
    gender: string;
    birthday: string;
    location: string;
    school: string;
    username: string;
    avatar: string; // 头像 URL
}

export default function ProfileEditScreen() {
    const navigation = useNavigation();

    // 初始化用户数据
    const [profileData, setProfileData] = useState<ProfileDataType>({
        name: '带头二哥',
        bio: '介绍喜好、个性或@你的亲友',
        gender: '男',
        birthday: '不展示',
        location: '美国·纽约·法拉盛·East Elmhurst',
        school: '填写学校，发现校友',
        username: 'nacker',
        avatar: 'https://via.placeholder.com/100', // 默认头像 URL
    });

    // 输入框变化处理函数
    const handleChange = (field: keyof ProfileDataType, value: string) => {
        setProfileData(prev => ({
            ...prev,
            [field]: value,
        }));
    };

    // 提交表单
    const handleSubmit = () => {
        // 模拟保存逻辑
        console.log('保存的数据:', profileData);
        Alert.alert('保存成功', '您的资料已更新', [
            { text: '确定', onPress: () => navigation.goBack() },
        ]);
    };

    return (
        <ScrollView style={styles.container}>
            {/* 顶部区域 */}
            <View style={styles.header}>
                {/* 封面图 */}
                <Image source={{ uri: 'https://via.placeholder.com/600x200' }} style={styles.coverImage} />

                {/* 头像 */}
                <TouchableOpacity style={styles.avatarContainer} onPress={() => console.log('更换头像')}>
                    <Image source={{ uri: profileData.avatar }} style={styles.avatar} />
                    <Text style={styles.changeAvatar}>更换头像</Text>
                </TouchableOpacity>

                {/* 资料完成度 */}
                <View style={styles.completionRate}>
                    <View style={styles.progressBar}>
                        <View style={styles.progressFilled} />
                    </View>
                    <Text style={styles.completionText}>资料完成度 70%</Text>
                </View>
            </View>

            {/* 内容区域 */}
            <View style={styles.content}>
                {/* 名字 */}
                <ProfileItem label="名字" fieldName="name" value={profileData.name} onChangeText={handleChange} />

                {/* 简介 */}
                <ProfileItem label="简介" fieldName="bio" value={profileData.bio} onChangeText={handleChange} />

                {/* 性别 */}
                <ProfileItem label="性别" fieldName="gender" value={profileData.gender} onChangeText={handleChange} />

                {/* 生日 */}
                <ProfileItem label="生日" fieldName="birthday" value={profileData.birthday} onChangeText={handleChange} />

                {/* 所在地 */}
                <ProfileItem label="所在地" fieldName="location" value={profileData.location} onChangeText={handleChange} />

                {/* 学校 */}
                <ProfileItem label="学校" fieldName="school" value={profileData.school} onChangeText={handleChange} />

                {/* 抖音号 */}
                <ProfileItem label="抖音号" fieldName="username" value={profileData.username} onChangeText={handleChange} editable={false} />
            </View>

            {/* 保存按钮 */}
            <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
                <Text style={styles.saveButtonText}>保存</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

// 子组件：单个资料项
type ProfileItemProps = {
    label: string;
    fieldName: keyof ProfileDataType;
    value: string;
    onChangeText: (field: keyof ProfileDataType, value: string) => void;
    editable?: boolean;
};

const ProfileItem: React.FC<ProfileItemProps> = ({
                                                     label,
                                                     fieldName,
                                                     value,
                                                     onChangeText,
                                                     editable = true,
                                                 }) => {
    return (
        <TouchableOpacity style={styles.profileItem} onPress={() => console.log('Edit', fieldName)}>
            <Text style={styles.itemLabel}>{label}</Text>
            <View style={styles.itemValueContainer}>
                <Text style={styles.itemValue}>{value}</Text>
                <Text style={styles.arrowIcon}>&gt;</Text>
            </View>
        </TouchableOpacity>
    );
};

// 样式定义
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#fff',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#eee',
        paddingVertical: 16,
        alignItems: 'center',
    },
    coverImage: {
        width: '100%',
        height: 200,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    avatarContainer: {
        marginTop: -50, // 向上偏移
        alignItems: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#fff',
    },
    changeAvatar: {
        marginTop: 8,
        color: '#007AFF',
    },
    completionRate: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
    },
    progressBar: {
        width: 150,
        height: 8,
        backgroundColor: '#eee',
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressFilled: {
        height: '100%',
        backgroundColor: '#007AFF',
        width: '70%', // 70% 进度
    },
    completionText: {
        marginLeft: 8,
        color: '#666',
    },
    content: {
        backgroundColor: '#fff',
        padding: 16,
    },
    profileItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#eee',
        height: 48,
    },
    itemLabel: {
        fontSize: 16,
        color: '#333',
    },
    itemValueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemValue: {
        fontSize: 16,
        color: '#666',
        marginRight: 8,
    },
    arrowIcon: {
        fontSize: 16,
        color: '#999',
    },
    saveButton: {
        marginTop: 24,
        backgroundColor: '#007AFF',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 16,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
