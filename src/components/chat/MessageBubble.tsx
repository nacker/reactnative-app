// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
// import { Audio } from 'expo-av';
//
// // 消息类型定义
// export type MessageType = 'text' | 'image' | 'voice' | 'video';
//
// // 消息数据接口
// export interface Message {
//   id: string;
//   type: MessageType;
//   content: string;
//   sender: {
//     id: string;
//     name: string;
//     avatar: string;
//   };
//   isSelf: boolean;
//   timestamp: number;
//   duration?: number; // 语音或视频的时长（秒）
//   isPlaying?: boolean; // 是否正在播放语音或视频
// }
//
// interface MessageBubbleProps {
//   message: Message;
//   onImagePress?: (imageUrl: string) => void;
//   onVoicePress?: (audioUrl: string, messageId: string) => void;
//   onVideoPress?: (videoUrl: string) => void;
// }
//
// const { width: screenWidth } = Dimensions.get('window');
// const MAX_BUBBLE_WIDTH = screenWidth * 0.65; // 气泡最大宽度为屏幕宽度的65%
//
// const MessageBubble: React.FC<MessageBubbleProps> = ({
//   message,
//   onImagePress,
//   onVoicePress,
//   onVideoPress
// }) => {
//   const { type, content, sender, isSelf, duration, isPlaying } = message;
//
//   // 渲染文本消息
//   const renderTextMessage = () => (
//     <View style={[
//       styles.bubble,
//       isSelf ? styles.selfBubble : styles.otherBubble
//     ]}>
//       <Text style={styles.textMessage}>{content}</Text>
//     </View>
//   );
//
//   // 渲染图片消息
//   const renderImageMessage = () => (
//     <TouchableOpacity
//       style={[
//         styles.bubble,
//         styles.imageBubble,
//         isSelf ? styles.selfBubble : styles.otherBubble
//       ]}
//       onPress={() => onImagePress && onImagePress(content)}
//     >
//       <Image
//         source={{ uri: content }}
//         style={styles.imageContent}
//         resizeMode="cover"
//       />
//     </TouchableOpacity>
//   );
//
//   // 渲染语音消息
//   const renderVoiceMessage = () => (
//     <TouchableOpacity
//       style={[
//         styles.bubble,
//         styles.voiceBubble,
//         isSelf ? styles.selfBubble : styles.otherBubble
//       ]}
//       onPress={() => onVoicePress && onVoicePress(content, message.id)}
//     >
//       <View style={styles.voiceContainer}>
//         <Image
//           source={require('../../assets/chat/voice_icon.png')}
//           style={[
//             styles.voiceIcon,
//             isSelf ? styles.voiceIconSelf : styles.voiceIconOther,
//             isPlaying && styles.voiceIconPlaying
//           ]}
//         />
//         <Text style={styles.voiceDuration}>{duration}''</Text>
//       </View>
//     </TouchableOpacity>
//   );
//
//   // 渲染视频消息
//   const renderVideoMessage = () => (
//     <TouchableOpacity
//       style={[
//         styles.bubble,
//         styles.videoBubble,
//         isSelf ? styles.selfBubble : styles.otherBubble
//       ]}
//       onPress={() => onVideoPress && onVideoPress(content)}
//     >
//       <View style={styles.videoContainer}>
//         <Image
//           source={{ uri: `${content}#preview` }}
//           style={styles.videoThumbnail}
//           resizeMode="cover"
//         />
//         <View style={styles.playButton}>
//           <Image
//             source={require('../../assets/chat/play_icon.png')}
//             style={styles.playIcon}
//           />
//         </View>
//         <Text style={styles.videoDuration}>{duration}''</Text>
//       </View>
//     </TouchableOpacity>
//   );
//
//   // 根据消息类型渲染不同的气泡
//   const renderMessageContent = () => {
//     switch (type) {
//       case 'text':
//         return renderTextMessage();
//       case 'image':
//         return renderImageMessage();
//       case 'voice':
//         return renderVoiceMessage();
//       case 'video':
//         return renderVideoMessage();
//       default:
//         return renderTextMessage();
//     }
//   };
//
//   return (
//     <View style={[
//       styles.messageContainer,
//       isSelf ? styles.selfMessageContainer : styles.otherMessageContainer
//     ]}>
//       {!isSelf && (
//         <Image source={{ uri: sender.avatar }} style={styles.avatar} />
//       )}
//       <View style={styles.bubbleContainer}>
//         {!isSelf && <Text style={styles.senderName}>{sender.name}</Text>}
//         {renderMessageContent()}
//       </View>
//       {isSelf && (
//         <Image source={{ uri: sender.avatar }} style={styles.avatar} />
//       )}
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   messageContainer: {
//     flexDirection: 'row',
//     marginVertical: 8,
//     paddingHorizontal: 16,
//   },
//   selfMessageContainer: {
//     justifyContent: 'flex-end',
//   },
//   otherMessageContainer: {
//     justifyContent: 'flex-start',
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginHorizontal: 8,
//   },
//   bubbleContainer: {
//     maxWidth: MAX_BUBBLE_WIDTH,
//   },
//   senderName: {
//     fontSize: 12,
//     color: '#999',
//     marginBottom: 2,
//     marginLeft: 8,
//   },
//   bubble: {
//     borderRadius: 16,
//     padding: 12,
//     maxWidth: MAX_BUBBLE_WIDTH,
//   },
//   selfBubble: {
//     backgroundColor: '#95EC69', // 微信自己发送的消息气泡颜色
//   },
//   otherBubble: {
//     backgroundColor: '#FFFFFF', // 微信接收的消息气泡颜色
//   },
//   textMessage: {
//     fontSize: 16,
//     lineHeight: 22,
//   },
//   imageBubble: {
//     padding: 0,
//     overflow: 'hidden',
//   },
//   imageContent: {
//     width: 150,
//     height: 150,
//     borderRadius: 12,
//   },
//   voiceBubble: {
//     minWidth: 80,
//   },
//   voiceContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   voiceIcon: {
//     width: 18,
//     height: 18,
//     marginRight: 8,
//   },
//   voiceIconSelf: {
//     tintColor: '#2C2C2C',
//   },
//   voiceIconOther: {
//     tintColor: '#2C2C2C',
//   },
//   voiceIconPlaying: {
//     opacity: 0.6,
//   },
//   voiceDuration: {
//     fontSize: 14,
//     color: '#666',
//   },
//   videoBubble: {
//     padding: 0,
//     overflow: 'hidden',
//   },
//   videoContainer: {
//     position: 'relative',
//     width: 150,
//     height: 200,
//   },
//   videoThumbnail: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 12,
//   },
//   playButton: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: [{ translateX: -20 }, { translateY: -20 }],
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   playIcon: {
//     width: 20,
//     height: 20,
//     tintColor: '#FFFFFF',
//   },
//   videoDuration: {
//     position: 'absolute',
//     bottom: 8,
//     right: 8,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     color: '#FFFFFF',
//     fontSize: 12,
//     paddingHorizontal: 6,
//     paddingVertical: 2,
//     borderRadius: 4,
//   },
// });
//
// export default MessageBubble;
