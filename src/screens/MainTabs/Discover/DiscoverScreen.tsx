import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DiscoverScreen() {
    // 模拟微博数据
    const [weiboList, setWeiboList] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    // 模拟加载微博数据
    const loadWeiboData = () => {
        setLoading(true);
        setTimeout(() => {
            const newData = Array.from({ length: 5 }, (_, i) => ({
                id: `${page}-${i}`,
                avatar: `https://via.placeholder.com/50?text=User${page}${i}`,
                nickname: `用户_${page}${i}`,
                time: '3分钟前',
                content: `这是一条微博内容，来自用户_${page}${i}。`,
                images: [
                    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
                    'https://images.unsplash.com/photo-1496566303115-51a7a8b5c544?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
                    'https://images.hippopx.com/photos/smile/woman-portrait-female-happy-closeup-715939.jp',
                    'https://en.freejpg.com.ar/asset/900/1e/1e9a/F100010174.jpg',
                    'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
                    'https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg',
                    'https://cdn.pixabay.com/photo/2017/07/28/14/29/macarons-2548827_1280.jpg',
                    'https://images.hippopx.com/photos/smile/woman-portrait-female-happy-closeup-715939.jpg',
                ].slice(0, Math.floor(Math.random() * 10)), // 随机生成0-9张图片
            }));
            setWeiboList(prev => [...prev, ...newData]);
            setLoading(false);
        }, 1000);
    };

    // 初始化加载数据
    useEffect(() => {
        loadWeiboData();
    }, []);

    // 加载更多数据
    const handleLoadMore = () => {
        if (!loading) {
            setPage(prev => prev + 1);
            loadWeiboData();
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                onScroll={({ nativeEvent }) => {
                    const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
                    const isNearBottom =
                        layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
                    if (isNearBottom) {
                        handleLoadMore();
                    }
                }}
                scrollEventThrottle={400} // 节流，避免频繁触发
            >
                {/* 微博列表 */}
                {weiboList.map(item => (
                    <TouchableOpacity key={item.id} style={styles.weiboItem}>
                        {/* 用户信息 */}
                        <View style={styles.userInfo}>
                            <Image source={{ uri: item.avatar }} style={styles.avatar} />
                            <View style={styles.userInfoText}>
                                <Text style={styles.nickname}>{item.nickname}</Text>
                                <Text style={styles.time}>{item.time}</Text>
                            </View>
                        </View>

                        {/* 微博内容 */}
                        <Text style={styles.content}>{item.content}</Text>

                        {/* 图片区域 */}
                        {item.images.map((image: string, index: number) => {
                            // 根据图片数量动态调整样式
                            const imageStyle =
                                item.images.length === 1
                                    ? styles.singleImage
                                    : item.images.length === 2
                                        ? styles.doubleImage
                                        : item.images.length <= 4
                                            ? styles.gridImageSmall
                                            : styles.gridImage;

                            return (
                                <Image
                                    key={index}
                                    source={{ uri: image }}
                                    style={imageStyle}
                                />
                            );
                        })}


                        {/* 底部操作栏 */}
                        <View style={styles.actionBar}>
                            <TouchableOpacity style={styles.actionButton}>
                                <Ionicons name="chatbubble-outline" size={18} color="#999" />
                                <Text style={styles.actionText}>评论</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButton}>
                                <Ionicons name="heart-outline" size={18} color="#999" />
                                <Text style={styles.actionText}>点赞</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButton}>
                                <Ionicons name="share-social-outline" size={18} color="#999" />
                                <Text style={styles.actionText}>转发</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                ))}

                {/* 加载更多提示 */}
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

// 样式定义
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollView: {
        padding: 10,
    },
    weiboItem: {
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 10,
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
    },
    userInfoText: {
        flex: 1,
    },
    nickname: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    time: {
        fontSize: 12,
        color: '#999',
        marginTop: 2,
    },
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
        aspectRatio: 16 / 9, // 单张图片显示为宽图
        borderRadius: 8,
    },
    doubleImage: {
        width: '49%', // 两张图片显示为两列
        aspectRatio: 1,
        margin: '0.5%',
        borderRadius: 8,
    },
    gridImageSmall: {
        width: '49%', // 四张及以下图片显示为两列布局
        aspectRatio: 1,
        margin: '0.5%',
        borderRadius: 8,
    },
    gridImage: {
        width: '32%', // 五张及以上图片显示为三列布局
        aspectRatio: 1,
        margin: '0.5%',
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
