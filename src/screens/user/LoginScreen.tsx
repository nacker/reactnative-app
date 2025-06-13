import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function LoginScreen({ navigation }: any) {
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');

    const handleSendCode = () => {
        if (phone.length !== 11) {
            Alert.alert('请输入正确的手机号');
            return;
        }
        Alert.alert('验证码已发送', `发送到手机号: ${phone}`);
    };

    const handleLogin = () => {
        if (code === '1234') {
            navigation.replace('MainTabs');
        } else {
            Alert.alert('验证码错误');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>手机号登录</Text>
            <TextInput
                style={styles.input}
                placeholder="请输入手机号"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
            />
            <View style={styles.codeRow}>
                <TextInput
                    style={[styles.input, { flex: 1 }]}
                    placeholder="请输入验证码"
                    keyboardType="number-pad"
                    value={code}
                    onChangeText={setCode}
                />
                <TouchableOpacity style={styles.codeBtn} onPress={handleSendCode}>
                    <Text style={styles.codeText}>发送验证码</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                <Text style={styles.loginText}>登录</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#fff' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 32, textAlign: 'center' },
    input: {
        height: 48, borderColor: '#ccc', borderWidth: 1, borderRadius: 8,
        paddingHorizontal: 12, marginBottom: 16
    },
    codeRow: { flexDirection: 'row', alignItems: 'center' },
    codeBtn: {
        backgroundColor: '#007AFF', paddingVertical: 12,
        paddingHorizontal: 12, marginLeft: 8, borderRadius: 8
    },
    codeText: { color: '#fff', fontWeight: 'bold' },
    loginBtn: { backgroundColor: '#28a745', marginTop: 24, paddingVertical: 14, borderRadius: 8 },
    loginText: { color: '#fff', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
});
