import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {useNavigation} from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '首页',
      // headerTitleAlign: Platform.OS === 'web' ? 'left' : 'center',
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to React Native Template</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
