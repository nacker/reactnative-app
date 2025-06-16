import React, { useLayoutEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FeedbackScreen = () => {
    const [feedback, setFeedback] = useState('');
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: '意见反馈',
            headerTitleAlign: 'center', // 标题居中（iOS默认居中，Android默认居左）
        });
    }, [navigation]);

    const handleSubmit = () => {
        if (!feedback.trim()) {
            Alert.alert('请输入您的反馈内容');
            return;
        }

        // TODO: 调用 API 提交反馈或本地处理
        console.log('用户反馈:', feedback);

        Alert.alert('提交成功', '感谢您的反馈！我们会尽快回复。', [
            { text: '确定', onPress: () => navigation.goBack() },
        ]);
    };

    return (
        <ScrollView style={styles.container}>
            {/* 移除了 <Text style={styles.title}>意见反馈</Text> */}

            <Text style={styles.label}>您的反馈 *</Text>
            <TextInput
                style={styles.textInput}
                placeholder="请描述您遇到的问题或建议"
                placeholderTextColor="#999"
                multiline
                numberOfLines={6}
                value={feedback}
                onChangeText={setFeedback}
            />

            {/* 移除了联系方式相关的内容 */}
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>提交反馈</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default FeedbackScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#444',
    },
    textInput: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 12,
        fontSize: 15,
        height: 120,
        textAlignVertical: 'top',
        marginBottom: 16,
    },
    submitButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
