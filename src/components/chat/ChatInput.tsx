// import React, { useState, useRef } from 'react';
// import {
//   View,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Keyboard,
//   Platform,
//   Animated,
//   KeyboardAvoidingView,
//   Text,
// } from 'react-native';
// import { MessageType } from './MessageBubble';
//
// interface ChatInputProps {
//   onSendMessage: (content: string, type: MessageType) => void;
//   onStartRecording: () => void;
//   onStopRecording: (cancelled: boolean) => void;
//   isRecording: boolean;
// }
//
// const ChatInput: React.FC<ChatInputProps> = ({
//   onSendMessage,
//   onStartRecording,
//   onStopRecording,
//   isRecording,
// }) => {
//   const [text, setText] = useState('');
//   const [isVoiceMode, setIsVoiceMode] = useState(false);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [showMoreOptions, setShowMoreOptions] = useState(false);
//
//   const inputRef = useRef<TextInput>(null);
//   const recordingAnimation = useRef(new Animated.Value(1)).current;
//
//   // 切换语音/键盘输入模式
//   const toggleVoiceMode = () => {
//     setIsVoiceMode(!isVoiceMode);
//     setShowEmojiPicker(false);
//     setShowMoreOptions(false);
//
//     if (isVoiceMode) {
//       // 切换到键盘模式，聚焦输入框
//       setTimeout(() => {
//         inputRef.current?.focus();
//       }, 100);
//     } else {
//       // 切换到语音模式，隐藏键盘
//       Keyboard.dismiss();
//     }
//   };
//
//   // 发送文本消息
//   const handleSendText = () => {
//     if (text.trim()) {
//       onSendMessage(text.trim(), 'text');
//       setText('');
//     }
//   };
//
//   // 处理语音按钮按下
//   const handleVoiceButtonPressIn = () => {
//     onStartRecording();
//
//     // 开始录音动画
//     Animated.loop(
//       Animated.sequence([
//         Animated.timing(recordingAnimation, {
//           toValue: 0.8,
//           duration: 500,
//           useNativeDriver: true,
//         }),
//         Animated.timing(recordingAnimation, {
//           toValue: 1,
//           duration: 500,
//           useNativeDriver: true,
//         }),
//       ])
//     ).start();
//   };
//
//   // 处理语音按钮释放
//   const handleVoiceButtonPressOut = () => {
//     onStopRecording(false);
//     recordingAnimation.stopAnimation();
//     recordingAnimation.setValue(1);
//   };
//
//   // 处理语音按钮取消
//   const handleVoiceButtonPressCancel = () => {
//     onStopRecording(true);
//     recordingAnimation.stopAnimation();
//     recordingAnimation.setValue(1);
//   };
//
//   // 打开图片选择器
//   const handleImagePicker = () => {
//     // 这里会调用图片选择功能，选择后调用onSendMessage
//     // 为了演示，我们模拟发送一个图片消息
//     onSendMessage('https://picsum.photos/300/300', 'image');
//     setShowMoreOptions(false);
//   };
//
//   // 打开相机
//   const handleCamera = () => {
//     // 这里会调用相机功能，拍照后调用onSendMessage
//     // 为了演示，我们模拟发送一个图片消息
//     onSendMessage('https://picsum.photos/300/300', 'image');
//     setShowMoreOptions(false);
//   };
//
//   // 打开视频录制
//   const handleVideoRecorder = () => {
//     // 这里会调用视频录制功能，录制后调用onSendMessage
//     // 为了演示，我们模拟发送一个视频消息
//     onSendMessage('https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4', 'video');
//     setShowMoreOptions(false);
//   };
//
//   // 渲染更多选项面板
//   const renderMoreOptions = () => {
//     if (!showMoreOptions) return null;
//
//     return (
//       <View style={styles.moreOptionsContainer}>
//         <TouchableOpacity style={styles.optionItem} onPress={handleImagePicker}>
//           <View style={styles.optionIconContainer}>
//             <Image
//               source={require('../../assets/chat/photo_icon.png')}
//               style={styles.optionIcon}
//             />
//           </View>
//           <View style={styles.optionTextContainer}>
//             <Image
//               source={require('../../assets/chat/photo_text.png')}
//               style={styles.optionText}
//             />
//           </View>
//         </TouchableOpacity>
//
//         <TouchableOpacity style={styles.optionItem} onPress={handleCamera}>
//           <View style={styles.optionIconContainer}>
//             <Image
//               source={require('../../assets/chat/camera_icon.png')}
//               style={styles.optionIcon}
//             />
//           </View>
//           <View style={styles.optionTextContainer}>
//             <Image
//               source={require('../../assets/chat/camera_text.png')}
//               style={styles.optionText}
//             />
//           </View>
//         </TouchableOpacity>
//
//         <TouchableOpacity style={styles.optionItem} onPress={handleVideoRecorder}>
//           <View style={styles.optionIconContainer}>
//             <Image
//               source={require('../../assets/chat/video_icon.png')}
//               style={styles.optionIcon}
//             />
//           </View>
//           <View style={styles.optionTextContainer}>
//             <Image
//               source={require('../../assets/chat/video_text.png')}
//               style={styles.optionText}
//             />
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   };
//
//   // 渲染表情选择器
//   const renderEmojiPicker = () => {
//     if (!showEmojiPicker) return null;
//
//     // 简单模拟表情选择器
//     const emojis = ['😀', '😂', '😊', '😍', '🥰', '😎', '🤔', '😴', '😭', '🥳'];
//
//     return (
//       <View style={styles.emojiPickerContainer}>
//         <View style={styles.emojiList}>
//           {emojis.map((emoji, index) => (
//             <TouchableOpacity
//               key={index}
//               style={styles.emojiItem}
//               onPress={() => {
//                 setText(text + emoji);
//               }}
//             >
//               <Text style={styles.emoji}>{emoji}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>
//     );
//   };
//
//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//       keyboardVerticalOffset={Platform.OS === 'ios' ? 84 : 0}
//     >
//       <View style={styles.container}>
//         <View style={styles.inputContainer}>
//           {/* 语音/键盘切换按钮 */}
//           <TouchableOpacity style={styles.iconButton} onPress={toggleVoiceMode}>
//             <Image
//               source={
//                 isVoiceMode
//                   ? require('../../assets/chat/keyboard_icon.png')
//                   : require('../../assets/chat/voice_icon.png')
//               }
//               style={styles.icon}
//             />
//           </TouchableOpacity>
//
//           {/* 文本输入框或语音按钮 */}
//           {isVoiceMode ? (
//             <TouchableOpacity
//               style={[
//                 styles.voiceButton,
//                 isRecording && styles.voiceButtonRecording,
//               ]}
//               onPressIn={handleVoiceButtonPressIn}
//               onPressOut={handleVoiceButtonPressOut}
//               delayLongPress={500}
//               onLongPress={handleVoiceButtonPressCancel}
//             >
//               <Animated.Text
//                 style={[
//                   styles.voiceButtonText,
//                   {
//                     transform: [{ scale: recordingAnimation }],
//                   },
//                 ]}
//               >
//                 {isRecording ? '松开发送' : '按住说话'}
//               </Animated.Text>
//             </TouchableOpacity>
//           ) : (
//             <TextInput
//               ref={inputRef}
//               style={styles.textInput}
//               placeholder="发送消息..."
//               value={text}
//               onChangeText={setText}
//               multiline
//               maxLength={500}
//               onFocus={() => {
//                 setShowEmojiPicker(false);
//                 setShowMoreOptions(false);
//               }}
//             />
//           )}
//
//           {/* 表情按钮 */}
//           <TouchableOpacity
//             style={styles.iconButton}
//             onPress={() => {
//               setShowEmojiPicker(!showEmojiPicker);
//               setShowMoreOptions(false);
//               if (isVoiceMode) {
//                 setIsVoiceMode(false);
//               }
//             }}
//           >
//             <Image
//               source={require('../../assets/chat/emoji_icon.png')}
//               style={styles.icon}
//             />
//           </TouchableOpacity>
//
//           {/* 发送按钮或更多按钮 */}
//           {text.trim() ? (
//             <TouchableOpacity style={styles.sendButton} onPress={handleSendText}>
//               <Image
//                 source={require('../../assets/chat/send_icon.png')}
//                 style={styles.sendIcon}
//               />
//             </TouchableOpacity>
//           ) : (
//             <TouchableOpacity
//               style={styles.iconButton}
//               onPress={() => {
//                 setShowMoreOptions(!showMoreOptions);
//                 setShowEmojiPicker(false);
//               }}
//             >
//               <Image
//                 source={require('../../assets/chat/more_icon.png')}
//                 style={styles.icon}
//               />
//             </TouchableOpacity>
//           )}
//         </View>
//
//         {/* 表情选择器 */}
//         {renderEmojiPicker()}
//
//         {/* 更多选项面板 */}
//         {renderMoreOptions()}
//       </View>
//     </KeyboardAvoidingView>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     borderTopWidth: StyleSheet.hairlineWidth,
//     borderTopColor: '#E5E5E5',
//     backgroundColor: '#F6F6F6',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 8,
//     paddingVertical: 8,
//   },
//   iconButton: {
//     width: 36,
//     height: 36,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     tintColor: '#7F7F7F',
//   },
//   textInput: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 18,
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     maxHeight: 120,
//     fontSize: 16,
//     marginHorizontal: 8,
//   },
//   voiceButton: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 18,
//     height: 36,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 8,
//   },
//   voiceButtonRecording: {
//     backgroundColor: '#E5E5E5',
//   },
//   voiceButtonText: {
//     fontSize: 16,
//     color: '#7F7F7F',
//   },
//   sendButton: {
//     width: 36,
//     height: 36,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#07C160',
//     borderRadius: 18,
//   },
//   sendIcon: {
//     width: 20,
//     height: 20,
//     tintColor: '#FFFFFF',
//   },
//   emojiPickerContainer: {
//     height: 200,
//     backgroundColor: '#F6F6F6',
//     borderTopWidth: StyleSheet.hairlineWidth,
//     borderTopColor: '#E5E5E5',
//     padding: 8,
//   },
//   emojiList: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   emojiItem: {
//     width: '10%',
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   emoji: {
//     fontSize: 24,
//   },
//   moreOptionsContainer: {
//     height: 200,
//     backgroundColor: '#F6F6F6',
//     borderTopWidth: StyleSheet.hairlineWidth,
//     borderTopColor: '#E5E5E5',
//     padding: 16,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   optionItem: {
//     width: '25%',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   optionIconContainer: {
//     width: 60,
//     height: 60,
//     borderRadius: 10,
//     backgroundColor: '#FFFFFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   optionIcon: {
//     width: 32,
//     height: 32,
//     tintColor: '#07C160',
//   },
//   optionTextContainer: {
//     alignItems: 'center',
//   },
//   optionText: {
//     width: 36,
//     height: 16,
//     tintColor: '#7F7F7F',
//   },
// });
//
// export default ChatInput;
