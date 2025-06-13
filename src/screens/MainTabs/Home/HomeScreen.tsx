import React, {useLayoutEffect , useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  StatusBar
} from 'react-native';
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


// 聊天列表数据
  const [chats, setChats] = useState([
    {
      id: '1',
      name: '微信团队',
      lastMessage: '欢迎使用微信',
      time: '12:30',
      unread: 0,
      avatar: 'https://randomuser.me/api/portraits/lego/1.jpg',
      isMuted: false
    },
    {
      id: '2',
      name: '张三',
      lastMessage: '晚上一起吃饭吗？',
      time: '11:45',
      unread: 3,
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      isMuted: true
    },
    {
      id: '3',
      name: '工作群',
      lastMessage: '李四: 方案已经发到群里了',
      time: '昨天',
      unread: 12,
      avatar: 'https://randomuser.me/api/portraits/lego/3.jpg',
      isMuted: false
    },
    {
      id: '4',
      name: '妈妈',
      lastMessage: '记得按时吃饭',
      time: '昨天',
      unread: 0,
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      isMuted: false
    },
    {
      id: '5',
      name: '校友群',
      lastMessage: '王五: 下个月同学聚会',
      time: '星期一',
      unread: 0,
      avatar: 'https://randomuser.me/api/portraits/lego/5.jpg',
      isMuted: true
    },
    {
      id: '6',
      name: '李四',
      lastMessage: '那个文件我收到了，谢谢',
      time: '星期一',
      unread: 0,
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      isMuted: false
    },
    {
      id: '7',
      name: '健身打卡群',
      lastMessage: '今天你健身了吗？',
      time: '2023/12/20',
      unread: 0,
      avatar: 'https://randomuser.me/api/portraits/lego/7.jpg',
      isMuted: false
    },
  ]);

  // 底部导航栏
  const tabs = [
    { id: '1', name: '微信', icon: '💬' },
    { id: '2', name: '通讯录', icon: '👥' },
    { id: '3', name: '发现', icon: '🔍' },
    { id: '4', name: '我', icon: '👤' }
  ];
  const [activeTab, setActiveTab] = useState('1');

  // 渲染聊天项
  const renderChatItem = ({ item }) => (
      <TouchableOpacity style={styles.chatItem}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.chatContent}>
          <View style={styles.chatHeader}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
          <View style={styles.chatFooter}>
            <Text
                style={[
                  styles.lastMessage,
                  item.unread > 0 && styles.unreadMessage
                ]}
                numberOfLines={1}
            >
              {item.lastMessage}
            </Text>
            {item.unread > 0 && (
                <View style={styles.unreadBadge}>
                  <Text style={styles.unreadText}>
                    {item.unread > 99 ? '99+' : item.unread}
                  </Text>
                </View>
            )}
            {item.isMuted && (
                <Text style={styles.mutedIcon}>🔇</Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
  );

  return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />

        {/* 搜索栏 */}
        <View style={styles.searchBar}>
          <TextInput
              placeholder="搜索"
              style={styles.searchInput}
              placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.searchIcon}>
            <Text>🔍</Text>
          </TouchableOpacity>
        </View>

        {/* 聊天列表 */}
        <FlatList
            data={chats}
            renderItem={renderChatItem}
            keyExtractor={item => item.id}
            style={styles.chatList}
            showsVerticalScrollIndicator={false}
        />

        {/* 底部导航栏 */}
        <View style={styles.tabBar}>
          {tabs.map(tab => (
              <TouchableOpacity
                  key={tab.id}
                  style={[
                    styles.tabItem,
                    activeTab === tab.id && styles.activeTab
                  ]}
                  onPress={() => setActiveTab(tab.id)}
              >
                <Text style={styles.tabIcon}>{tab.icon}</Text>
                <Text style={styles.tabText}>{tab.name}</Text>
              </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 10,
    paddingHorizontal: 10,
    height: 40,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  searchIcon: {
    padding: 8,
  },
  chatList: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 4,
    marginRight: 12,
  },
  chatContent: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  chatFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lastMessage: {
    flex: 1,
    fontSize: 14,
    color: '#999',
    marginRight: 8,
  },
  unreadMessage: {
    color: '#000',
  },
  unreadBadge: {
    backgroundColor: '#f44336',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  unreadText: {
    color: '#fff',
    fontSize: 12,
  },
  mutedIcon: {
    marginLeft: 8,
  },
  tabBar: {
    flexDirection: 'row',
    height: 56,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    borderTopWidth: 2,
    borderTopColor: '#07C160',
  },
  tabIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  tabText: {
    fontSize: 12,
  },
});
