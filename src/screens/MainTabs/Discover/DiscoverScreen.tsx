import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    RefreshControl,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../../../types/navigation.type";

type DiscoverScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ImageBrowser'>;

export default function DiscoverScreen() {
    const [weiboList, setWeiboList] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [refreshing, setRefreshing] = useState(false);

    const navigation = useNavigation<DiscoverScreenNavigationProp>();

    const generateWeiboData = (pageNum: number) => {
        return Array.from({ length: 5 }, (_, i) => ({
            id: `${pageNum}-${i}`,
            avatar: `https://randomuser.me/api/portraits/women/${i}.jpg`,
            nickname: `用户_${pageNum}${i}`,
            time: '3分钟前',
            content: `这是一条微博内容，来自用户_${pageNum}${i}。`,
            images: [
                'https://resume.yihaoredian.com.cn/0.jpg',
                'https://resume.yihaoredian.com.cn/1.jpg',
                'https://resume.yihaoredian.com.cn/2.jpg',
                'https://resume.yihaoredian.com.cn/3.jpg',
                'https://resume.yihaoredian.com.cn/4.jpg',
                'https://resume.yihaoredian.com.cn/5.jpg',
                'https://resume.yihaoredian.com.cn/6.jpg',
                'https://resume.yihaoredian.com.cn/7.jpg',
                'https://resume.yihaoredian.com.cn/8.jpg',
            ].slice(0, Math.floor(Math.random() * 9) + 1),
        }));
    };

    const loadWeiboData = () => {
        setLoading(true);
        setTimeout(() => {
            const newData = generateWeiboData(page);
            setWeiboList(prev => [...prev, ...newData]);
            setLoading(false);
        }, 1000);
    };

    const handleRefresh = () => {
        setRefreshing(true);
        setPage(1);
        setTimeout(() => {
            const newData = generateWeiboData(1);
            setWeiboList(newData);
            setRefreshing(false);
        }, 1000);
    };

    const handleLoadMore = () => {
        if (!loading) {
            const nextPage = page + 1;
            setPage(nextPage);
            const newData = generateWeiboData(nextPage);
            setWeiboList(prev => [...prev, ...newData]);
        }
    };

    useEffect(() => {
        loadWeiboData();
    }, []);

    const getImageStyle = (count: number) => {
        if (count === 1) return styles.singleImage;
        if (count === 2) return styles.doubleImage;
        if (count === 3) return styles.tripleImage;
        if (count === 4) return styles.grid2x2;
        if (count <= 6) return styles.grid3x2;
        return styles.grid3x3;
    };

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                        colors={['#007AFF']}
                        tintColor="#007AFF"
                        title="正在刷新..."
                        titleColor="#007AFF"
                    />
                }
                onScroll={({ nativeEvent }) => {
                    const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
                    const isNearBottom =
                        layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
                    if (isNearBottom) {
                        handleLoadMore();
                    }
                }}
                scrollEventThrottle={400}
            >
                {weiboList.map(item => (
                    <TouchableOpacity key={item.id} style={styles.weiboItem}>
                        <View style={styles.userInfo}>
                            <Image source={{ uri: item.avatar }} style={styles.avatar} contentFit="cover" />
                            <View style={styles.userInfoText}>
                                <Text style={styles.nickname}>{item.nickname}</Text>
                                <Text style={styles.time}>{item.time}</Text>
                            </View>
                        </View>

                        <Text style={styles.content}>{item.content}</Text>

                        {item.images.length > 0 && (
                            <View style={styles.imageContainer}>
                                {item.images.map((image: string, index: number) => (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => {
                                            navigation.navigate('ImageBrowser', {
                                                images: item.images,
                                                index: index
                                            });
                                        }}
                                        style={getImageStyle(item.images.length)}
                                        activeOpacity={0.8}
                                    >
                                        <Image
                                            source={{ uri: image }}
                                            style={StyleSheet.absoluteFill}
                                            contentFit="cover"
                                        />
                                    </TouchableOpacity>
                                ))}
                            </View>
                        )}

                        <View style={styles.actionBar}>
                            <TouchableOpacity style={styles.actionButton}>
                                <Ionicons name="chatbubble-outline" size={18} color="#999" />
                                <Text style={styles.actionText}>评论</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButton}>
                                <Ionicons name="heart-outline" size={18} color="#999" />
                                <Text style={styles.actionText}>点赞</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                ))}

                {loading && (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="small" color="#007AFF" />
                        <Text style={styles.loadingText}>加载中...</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
    scrollView: { marginLeft: 5, marginRight: 5 },
    weiboItem: {
        backgroundColor: '#fff',
        borderRadius: 8,
        marginTop: 12,
        padding: 12,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
        backgroundColor: '#ccc',
    },
    userInfoText: { flex: 1 },
    nickname: { fontSize: 16, fontWeight: 'bold', color: '#333' },
    time: { fontSize: 12, color: '#999', marginTop: 2 },
    content: {
        fontSize: 14,
        color: '#333',
        lineHeight: 20,
        marginBottom: 10,
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    singleImage: {
        width: '100%',
        aspectRatio: 16 / 9,
        marginBottom: 8,
        borderRadius: 8,
        overflow: 'hidden',
    },
    doubleImage: {
        width: '48%',
        aspectRatio: 1,
        margin: '1%',
        borderRadius: 8,
        overflow: 'hidden',
    },
    tripleImage: {
        width: '31%',
        aspectRatio: 1,
        margin: '1%',
        borderRadius: 8,
        overflow: 'hidden',
    },
    grid2x2: {
        width: '48%',
        aspectRatio: 1,
        margin: '1%',
        borderRadius: 8,
        overflow: 'hidden',
    },
    grid3x2: {
        width: '31%',
        aspectRatio: 1,
        margin: '1%',
        borderRadius: 8,
        overflow: 'hidden',
    },
    grid3x3: {
        width: '31%',
        aspectRatio: 1,
        margin: '1%',
        borderRadius: 8,
        overflow: 'hidden',
    },
    actionBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#eee',
        paddingTop: 10,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionText: {
        fontSize: 14,
        color: '#999',
        marginLeft: 5,
    },
    loadingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    loadingText: {
        fontSize: 14,
        color: '#999',
        marginLeft: 8,
    },
});
