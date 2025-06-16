import React, { useState } from 'react';
// 导入React核心库和useState钩子用于状态管理
import {
    View,          // 基础容器组件
    Text,          // 文本显示组件
    Image,         // 图片显示组件
    TouchableOpacity, // 可点击的交互组件
    StyleSheet,    // 样式表创建工具
    ScrollView,    // 滚动容器组件
    Alert,         // 系统提示对话框
} from 'react-native';
// 导入React Native基础组件
import { useNavigation } from '@react-navigation/native';
// 导入导航钩子用于页面导航
import {Ionicons} from "@expo/vector-icons";
// 导入Expo图标库

// 定义用户资料数据类型接口
// 包含用户所有可编辑的个人信息字段
interface ProfileDataType {
    name: string;       // 用户姓名
    bio: string;        // 个人简介
    gender: string;     // 性别
    birthday: string;   // 生日
    location: string;   // 所在地
    school: string;     // 学校
    username: string;   // 用户名
    avatar: string;     // 头像URL
}

// 个人资料编辑屏幕组件
// 用于展示和编辑用户的个人信息
export default function ProfileEditScreen() {
    const navigation = useNavigation();
    // 获取导航对象用于页面跳转

    // 初始化用户资料数据状态
    // 使用useState钩子管理用户资料数据
    const [profileData, setProfileData] = useState<ProfileDataType>({
        name: '带头二哥',                          // 默认姓名
        bio: '介绍喜好、个性或@你的亲友',           // 默认个人简介
        gender: '男',                              // 默认性别
        birthday: '不展示',                        // 默认生日设置
        location: '美国·纽约·法拉盛·East Elmhurst', // 默认所在地
        school: '填写学校，发现校友',               // 默认学校信息
        username: 'nacker',                        // 默认用户名
        avatar: 'https://via.placeholder.com/100', // 默认头像URL
    });

    // 输入框变化处理函数
    // 用于更新对应字段的用户资料数据
    // 参数: field - 要更新的字段名, value - 新的字段值
    const handleChange = (field: keyof ProfileDataType, value: string) => {
        setProfileData(prev => ({
            ...prev,               // 保留原有数据
            [field]: value,        // 更新指定字段的值
        }));
    };

    // 提交表单处理函数
    // 用于保存用户编辑后的资料信息
    const handleSubmit = () => {
        // 模拟保存逻辑 - 在控制台打印保存的数据
        console.log('保存的数据:', profileData);
        // 显示保存成功提示对话框
        Alert.alert('保存成功', '您的资料已更新', [
            { text: '确定', onPress: () => navigation.goBack() }, // 点击确定返回上一页
        ]);
    };

    // 渲染组件UI
    return (
        <ScrollView style={styles.container}> {/* 可滚动容器，用于适配小屏幕设备 */}
            {/* 顶部区域 - 包含封面图、头像和资料完成度 */}
            <View style={styles.header}>
                {/* 封面图 */}
                <Image source={{ uri: 'https://via.placeholder.com/600x200' }} style={styles.coverImage} />

                {/* 头像区域 */}
                <TouchableOpacity style={styles.avatarContainer} onPress={() => console.log('更换头像')}>
                    <Image source={{ uri: profileData.avatar }} style={styles.avatar} />
                    <Text style={styles.changeAvatar}>更换头像</Text>
                </TouchableOpacity>

                {/* 资料完成度指示器 */}
                <View style={styles.completionRate}>
                    <View style={styles.progressBar}>
                        <View style={styles.progressFilled} />
                    </View>
                    <Text style={styles.completionText}>资料完成度 70%</Text>
                </View>
            </View>

            {/* 内容区域 - 包含所有可编辑的资料项 */}
            <View style={styles.content}>
                {/* 名字编辑项 */}
                <ProfileItem label="名字" fieldName="name" value={profileData.name} onChangeText={handleChange} />

                {/* 简介编辑项 */}
                <ProfileItem label="简介" fieldName="bio" value={profileData.bio} onChangeText={handleChange} />

                {/* 性别编辑项 */}
                <ProfileItem label="性别" fieldName="gender" value={profileData.gender} onChangeText={handleChange} />

                {/* 生日编辑项 */}
                <ProfileItem label="生日" fieldName="birthday" value={profileData.birthday} onChangeText={handleChange} />

                {/* 所在地编辑项 */}
                <ProfileItem label="所在地" fieldName="location" value={profileData.location} onChangeText={handleChange} />

                {/* 学校编辑项 */}
                <ProfileItem label="学校" fieldName="school" value={profileData.school} onChangeText={handleChange} />

                {/* 抖音号编辑项 - 当前被注释掉 */}
                {/*<ProfileItem label="抖音号" fieldName="username" value={profileData.username} onChangeText={handleChange} editable={false} />*/}
            </View>

            {/* 保存按钮 */}
            <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
                <Text style={styles.saveButtonText}>保存</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

// 子组件：单个资料项组件
// 用于展示和编辑单个用户资料字段
type ProfileItemProps = {
    label: string;                          // 资料项标签名
    fieldName: keyof ProfileDataType;       // 对应的数据字段名
    value: string;                          // 当前值
    onChangeText: (field: keyof ProfileDataType, value: string) => void; // 值变化回调函数
    editable?: boolean;                     // 是否可编辑，默认为true
};

// 资料项组件实现
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
// 使用StyleSheet.create创建组件样式
const styles = StyleSheet.create({
    container: {
        flex: 1,                  // 占据整个可用空间
        backgroundColor: '#fff',  // 背景色为白色
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
        position: 'absolute',      // 设置为绝对定位
        bottom: 20,                // 距离屏幕底部20个单位
        left: 20,               // 距离屏幕左侧10%宽度
        right: 20,              // 距离屏幕右侧10%宽度
        backgroundColor: '#007AFF', // 背景色为蓝色
        paddingVertical: 14,      // 垂直内边距14
        borderRadius: 8,          // 圆角8
        alignItems: 'center',     // 子元素垂直居中对齐
        // width: '80%',             // 宽度占屏幕的80%
    },
    saveButtonText: {
        color: '#fff',            // 文字颜色为白色
        fontSize: 16,             // 字体大小16
        fontWeight: 'bold',       // 字体加粗
    },
});
