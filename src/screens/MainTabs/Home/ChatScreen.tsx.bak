import React, {useEffect, useLayoutEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useNavigation} from "@react-navigation/native";

export default function ChatScreen({ navigation, route }: {navigation: any, route: any}) {

// 动态设置标题
  useEffect(() => {
    navigation.setOptions({
      title: route.params?.title || '妹子',
      headerTitleAlign: 'center', // 标题居中（iOS默认居中，Android默认居左）
    });
  }, [navigation, route.params]);
  return (
    <View style={styles.container}>
      <Text>聊天页</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
