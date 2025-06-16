import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "../../types/navigation.type";

type ImageBrowserRouteProp = RouteProp<RootStackParamList, 'ImageBrowser'>;

interface ImageBrowserProps {
    route: ImageBrowserRouteProp;
}

const ImageBrowserScreen: React.FC<ImageBrowserProps> = ({ route }) => {
    const navigation = useNavigation();

    // 解构路由参数，并提供默认值
    const { images = [], index = 0 } = route.params || {};

    // 格式化图片数组为 ImageViewer 所需的格式
    const formattedImages = images.map((url: string) => ({ url }));

    return (
        <View style={styles.container}>
            {/* 图片浏览器组件 */}
            <ImageViewer
                imageUrls={formattedImages} // 图片数组
                index={index} // 当前显示的图片索引
                enableSwipeDown={true} // 允许下滑关闭
                onSwipeDown={() => {
                    navigation.goBack(); // 下滑关闭页面
                }}
                saveToLocalByLongPress={false} // 禁用长按保存功能
                backgroundColor="black" // 背景颜色
                maxOverflow={300} // 最大缩放比例
                renderIndicator={(currentIndex, allSize) => {
                    // 渲染页码指示器
                    const safeCurrentIndex = currentIndex ?? 0;
                    const safeAllSize = allSize ?? 1;

                    return (
                        <View style={styles.indicatorContainer}>
                            <Text style={styles.indicatorText}>
                                {safeCurrentIndex + 1}/{safeAllSize}
                            </Text>
                        </View>
                    );
                }}
            />
        </View>
    );
};

// 样式定义
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    indicatorContainer: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 8,
        borderRadius: 20,
    },
    indicatorText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default ImageBrowserScreen;
