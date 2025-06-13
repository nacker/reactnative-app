import React, {useLayoutEffect} from 'react';
import { View, Text } from 'react-native';
import {useNavigation} from "@react-navigation/native";

export default function ContactsScreen() {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: '通讯录',
            headerTitleAlign: 'center',
        });
    }, [navigation]);


    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>通讯录</Text></View>;
}
