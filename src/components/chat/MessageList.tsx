// import React, { useRef, useEffect } from 'react';
// import { FlatList, StyleSheet, View, ActivityIndicator } from 'react-native';
// import MessageBubble, { Message, MessageType } from './MessageBubble';
//
// interface MessageListProps {
//   messages: Message[];
//   onLoadMore?: () => void;
//   isLoadingMore?: boolean;
//   onImagePress?: (imageUrl: string) => void;
//   onVoicePress?: (audioUrl: string, messageId: string) => void;
//   onVideoPress?: (videoUrl: string) => void;
// }
//
// const MessageList: React.FC<MessageListProps> = ({
//   messages,
//   onLoadMore,
//   isLoadingMore = false,
//   onImagePress,
//   onVoicePress,
//   onVideoPress,
// }) => {
//   const flatListRef = useRef<FlatList>(null);
//
//   // 当有新消息时，滚动到底部
//   useEffect(() => {
//     if (messages.length > 0) {
//       setTimeout(() => {
//         flatListRef.current?.scrollToEnd({ animated: true });
//       }, 100);
//     }
//   }, [messages.length]);
//
//   // 渲染消息气泡
//   const renderMessage = ({ item }: { item: Message }) => (
//     <MessageBubble
//       message={item}
//       onImagePress={onImagePress}
//       onVoicePress={onVoicePress}
//       onVideoPress={onVideoPress}
//     />
//   );
//
//   // 渲染加载更多指示器
//   const renderLoadingMore = () => {
//     if (!isLoadingMore) return null;
//
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="small" color="#07C160" />
//       </View>
//     );
//   };
//
//   // 渲染消息列表
//   return (
//     <FlatList
//       ref={flatListRef}
//       data={messages}
//       renderItem={renderMessage}
//       keyExtractor={(item) => item.id}
//       style={styles.container}
//       contentContainerStyle={styles.contentContainer}
//       onEndReached={onLoadMore}
//       onEndReachedThreshold={0.3}
//       ListHeaderComponent={renderLoadingMore}
//       inverted={false} // 设置为true会倒序显示，最新的消息在顶部
//     />
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#EDEDED', // 微信聊天背景色
//   },
//   contentContainer: {
//     paddingVertical: 16,
//   },
//   loadingContainer: {
//     paddingVertical: 16,
//     alignItems: 'center',
//   },
// });
//
// export default MessageList;
