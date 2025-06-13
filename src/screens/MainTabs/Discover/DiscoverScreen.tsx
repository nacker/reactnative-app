import React, {useLayoutEffect} from 'react';
import { View, Text } from 'react-native';
import {useNavigation} from "@react-navigation/native";

export default function DiscoverScreen()
{
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: '发现',
            headerTitleAlign: 'center',
        });
    }, [navigation]);


    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>发现</Text></View>;
}
