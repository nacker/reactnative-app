import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// 定义用户资料数据类型接口
interface ProfileDataType {
    name: string;
    bio: string;
    gender: string;
    birthday: string;
    location: string;
    school: string;
    username: string;
    avatar: string;
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
        avatar: 'https://via.placeholder.com/100',
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
        console.log('保存的数据:', profileData);
        Alert.alert('保存成功', '您的资料已更新', [
            { text: '确定', onPress: () => navigation.goBack() },
        ]);
    };

    return (
        <View style={styles.outerContainer}>
            {/* 可滚动内容 */}
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
                    <ProfileItem label="名字" fieldName="name" value={profileData.name} onChangeText={handleChange} />
                    <ProfileItem label="简介" fieldName="bio" value={profileData.bio} onChangeText={handleChange} />
                    <ProfileItem label="性别" fieldName="gender" value={profileData.gender} onChangeText={handleChange} />
                    <ProfileItem label="生日" fieldName="birthday" value={profileData.birthday} onChangeText={handleChange} />
                    <ProfileItem label="所在地" fieldName="location" value={profileData.location} onChangeText={handleChange} />
                    <ProfileItem label="学校" fieldName="school" value={profileData.school} onChangeText={handleChange} />
                </View>
            </ScrollView>

            {/* 底部保存按钮 */}
            <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
                <Text style={styles.saveButtonText}>保存</Text>
            </TouchableOpacity>
        </View>
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
                <Ionicons name="chevron-forward" size={20} color="#999" />
            </View>
        </TouchableOpacity>
    );
};

// 样式定义
const styles = StyleSheet.create({
    outerContainer: {
        flex: 1, // 占据整个可用空间
        backgroundColor: '#fff', // 背景色为白色
    },
    container: {
        flexGrow: 1, // 确保 ScrollView 可以占据剩余空间
        // paddingBottom: 80, // 为底部按钮留出空间
    },
    header: {
        backgroundColor: '#fff',                  // 背景色为白色
        borderBottomWidth: StyleSheet.hairlineWidth, // 底部边框宽度为细线
        borderBottomColor: '#eee',                // 底部边框颜色为浅灰色
        paddingVertical: 16,                      // 垂直内边距16
        alignItems: 'center',                     // 子元素垂直居中对齐
    },
    coverImage: {
        width: '100%',            // 宽度占满父容器
        height: 200,              // 高度200
        position: 'absolute',     // 绝对定位
        top: 0,                   // 距离顶部0
        left: 0,                  // 距离左侧0
    },
    avatarContainer: {
        marginTop: -50,           // 向上偏移50，用于覆盖在封面图上
        alignItems: 'center',     // 子元素垂直居中对齐
    },
    avatar: {
        width: 100,               // 宽度100
        height: 100,              // 高度100
        borderRadius: 50,         // 圆角50，使头像呈圆形
        borderWidth: 3,           // 边框宽度3
        borderColor: '#fff',      // 边框颜色为白色
    },
    changeAvatar: {
        marginTop: 8,             // 顶部外边距8
        color: '#007AFF',         // 文字颜色为蓝色
    },
    completionRate: {
        flexDirection: 'row',     // 子元素横向排列
        alignItems: 'center',     // 子元素垂直居中对齐
        marginTop: 16,            // 顶部外边距16
    },
    progressBar: {
        width: 150,               // 宽度150
        height: 8,                // 高度8
        backgroundColor: '#eee',  // 背景色为浅灰色
        borderRadius: 4,          // 圆角4
        overflow: 'hidden',       // 超出部分隐藏
    },
    progressFilled: {
        height: '100%',           // 高度占满父容器
        backgroundColor: '#007AFF', // 填充颜色为蓝色
        width: '70%',             // 宽度70%，表示70%的完成度
    },
    completionText: {
        marginLeft: 8,            // 左侧外边距8
        color: '#666',            // 文字颜色为深灰色
    },
    content: {
        backgroundColor: '#fff',  // 背景色为白色
        padding: 16,              // 内边距16
    },
    profileItem: {
        flexDirection: 'row',     // 子元素横向排列
        justifyContent: 'space-between', // 子元素两端对齐
        alignItems: 'center',     // 子元素垂直居中对齐
        paddingVertical: 12,      // 垂直内边距12
        borderBottomWidth: StyleSheet.hairlineWidth, // 底部边框宽度为细线
        borderBottomColor: '#eee', // 底部边框颜色为浅灰色
        height: 58,               // 高度58
    },
    itemLabel: {
        fontSize: 16,             // 字体大小16
        color: '#333',            // 文字颜色为深灰色
    },
    itemValueContainer: {
        flexDirection: 'row',     // 子元素横向排列
        alignItems: 'center',     // 子元素垂直居中对齐
    },
    itemValue: {
        fontSize: 16,             // 字体大小16
        color: '#666',            // 文字颜色为中灰色
        marginRight: 8,           // 右侧外边距8
    },
    arrowIcon: {
        fontSize: 16,             // 字体大小16
        color: '#999',            // 文字颜色为浅灰色
    },
    saveButton: {
        position: 'absolute', // 绝对定位
        bottom: 30, // 距离底部20
        left: 20, // 距离左侧20
        right: 20, // 距离右侧20
        backgroundColor: '#007AFF', // 蓝色背景
        paddingVertical: 14, // 垂直内边距
        borderRadius: 8, // 圆角
        alignItems: 'center', // 文字居中
    },
    saveButtonText: {
        color: '#fff', // 白色文字
        fontSize: 16, // 字体大小
        fontWeight: 'bold', // 加粗
    },
});
