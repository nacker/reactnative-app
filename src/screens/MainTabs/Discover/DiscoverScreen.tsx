import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types/navigation.type';

type DiscoverScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ImageBrowser'>;

export default function DiscoverScreen() {
    const [weiboList, setWeiboList] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    const navigation = useNavigation<DiscoverScreenNavigationProp>();

    const loadWeiboData = () => {
        setLoading(true);
        setTimeout(() => {
            const newData = Array.from({ length: 5 }, (_, i) => ({
                id: `${page}-${i}`,
                avatar: `https://randomuser.me/api/portraits/women/${(page * 5 + i) % 100}.jpg`,
                nickname: `用户_${page}${i}`,
                time: '3分钟前',
                content: `这是第 ${page}-${i} 条微博内容。`,
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
            setWeiboList(prev => [...prev, ...newData]);
            setLoading(false);
        }, 1000);
    };

    useEffect(() => {
        loadWeiboData();
    }, []);

    const handleLoadMore = () => {
        if (!loading) {
            setPage(prev => prev + 1);
            loadWeiboData();
        }
    };

    const renderImages = (images: string[], postId: string) => {
        const count = images.length;

        if (count === 1) {
            return (
                <TouchableOpacity
                    onPress={() => navigation.navigate('ImageBrowser', { images, index: 0 })}
                    activeOpacity={0.85}
                    style={{ marginBottom: 10 }}
                >
                    <Image
                        source={{ uri: images[0] }}
                        style={styles.singleImage}
                        contentFit="cover"
                    />
                </TouchableOpacity>
            );
        }

        const getImageSize = () => {
            if (count === 2) return '48%';
            if (count === 4) return '48%';
            return '31%'; // for 3, 5, 6, 7, 8, 9
        };

        const imageSize = getImageSize();

        return (
            <View style={styles.imageContainer}>
                {images.map((img, idx) => (
                    <TouchableOpacity
                        key={`${postId}-${idx}`}
                        onPress={() => navigation.navigate('ImageBrowser', { images, index: idx })}
                        activeOpacity={0.85}
                        style={[styles.gridImageWrapper, { width: imageSize }]}
                    >
                        <Image
                            source={{ uri: img }}
                            style={styles.gridImage}
                            contentFit="cover"
                        />
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                onScroll={({ nativeEvent }) => {
                    const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
                    if (layoutMeasurement.height + contentOffset.y >= contentSize.height - 20) {
                        handleLoadMore();
                    }
                }}
                scrollEventThrottle={400}
            >
                {weiboList.map(item => (
                    <View key={item.id} style={styles.weiboItem}>
                        {/* 用户信息 */}
                        <View style={styles.userInfo}>
                            <Image source={{ uri: item.avatar }} style={styles.avatar} contentFit="cover" />
                            <View style={styles.userInfoText}>
                                <Text style={styles.nickname}>{item.nickname}</Text>
                                <Text style={styles.time}>{item.time}</Text>
                            </View>
                        </View>

                        {/* 内容 */}
                        <Text style={styles.content}>{item.content}</Text>

                        {/* 图片布局 */}
                        {renderImages(item.images, item.id)}

                        {/* 操作栏 */}
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
                    </View>
                ))}

                {/* 加载更多 */}
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
    scrollView: { padding: 10 },
    weiboItem: {
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 12,
        padding: 12,
    },
    userInfo: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
    avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
    userInfoText: { flex: 1 },
    nickname: { fontSize: 16, fontWeight: 'bold', color: '#333' },
    time: { fontSize: 12, color: '#999' },
    content: { fontSize: 14, color: '#333', marginBottom: 10 },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        gap: 6,
        marginBottom: 10,
    },
    singleImage: {
        width: '100%',
        aspectRatio: 16 / 9,
        borderRadius: 8,
    },
    gridImageWrapper: {
        aspectRatio: 1,
        marginBottom: 6,
        borderRadius: 8,
        overflow: 'hidden',
    },
    gridImage: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
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
