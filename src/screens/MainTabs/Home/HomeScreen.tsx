import React, {useEffect, useLayoutEffect, useState} from 'react';
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

export default function HomeScreen({ navigation, route }: {navigation: any, route: any}) {

  // 动态设置标题
  useEffect(() => {
    navigation.setOptions({
      title: route.params?.title || '首页',
      // headerTitleAlign: Platform.OS === 'web' ? 'left' : 'center',
      headerTitleAlign: 'center', // 标题居中（iOS默认居中，Android默认居左）
    });
  }, [navigation, route.params]);


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
    {
      id: '8',
      name: '赵六',
      lastMessage: '周末去看电影吗？',
      time: '10:20',
      unread: 1,
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      isMuted: false
    },
    {
      id: '9',
      name: '项目A组',
      lastMessage: '王总: 这个需求需要调整',
      time: '昨天',
      unread: 5,
      avatar: 'https://randomuser.me/api/portraits/lego/9.jpg',
      isMuted: false
    },
    {
      id: '10',
      name: '姐姐',
      lastMessage: '爸妈下周要来',
      time: '昨天',
      unread: 0,
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      isMuted: false
    },
    {
      id: '11',
      name: '高中同学群',
      lastMessage: '班长: 聚会照片已上传',
      time: '星期二',
      unread: 23,
      avatar: 'https://randomuser.me/api/portraits/lego/11.jpg',
      isMuted: false
    },
    {
      id: '12',
      name: '陈老师',
      lastMessage: '作业记得按时提交',
      time: '星期二',
      unread: 0,
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      isMuted: true
    },
    {
      id: '13',
      name: '快递小哥',
      lastMessage: '包裹已放快递柜',
      time: '09:15',
      unread: 0,
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      isMuted: false
    },
    {
      id: '14',
      name: '游戏战队',
      lastMessage: '今晚8点开黑',
      time: '2023/12/18',
      unread: 0,
      avatar: 'https://randomuser.me/api/portraits/lego/14.jpg',
      isMuted: false
    },
    {
      id: '15',
      name: '房东',
      lastMessage: '房租已收到',
      time: '2023/12/15',
      unread: 0,
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      isMuted: false
    },
    {
      id: '16',
      name: '周七',
      lastMessage: '帮我带杯咖啡',
      time: '08:30',
      unread: 2,
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
      isMuted: false
    },
    {
      id: '17',
      name: '读书会',
      lastMessage: '本月推荐《三体》',
      time: '星期一',
      unread: 0,
      avatar: 'https://randomuser.me/api/portraits/lego/17.jpg',
      isMuted: true
    },
    {
      id: '18',
      name: '吴八',
      lastMessage: '资料发你邮箱了',
      time: '星期日',
      unread: 0,
      avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
      isMuted: false
    },
    {
      id: '19',
      name: '公司HR',
      lastMessage: '请确认年假时间',
      time: '星期五',
      unread: 1,
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
      isMuted: false
    },
    {
      id: '20',
      name: '摄影俱乐部',
      lastMessage: '周末外拍活动',
      time: '2023/12/10',
      unread: 0,
      avatar: 'https://randomuser.me/api/portraits/lego/20.jpg',
      isMuted: false
    },
    {
      id: '21',
      name: '郑九',
      lastMessage: '合同已签署',
      time: '13:45',
      unread: 0,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
      isMuted: false
    },
    {
      id: '22',
      name: '家人群',
      lastMessage: '爸爸: 春节回家时间',
      time: '星期四',
      unread: 4,
      avatar: 'https://randomuser.me/api/portraits/lego/22.jpg',
      isMuted: false
    },
    {
      id: '23',
      name: '健身房',
      lastMessage: '您的会员即将到期',
      time: '星期三',
      unread: 0,
      avatar: 'https://randomuser.me/api/portraits/lego/23.jpg',
      isMuted: true
    },
    {
      id: '24',
      name: '孙十',
      lastMessage: '会议纪要已整理',
      time: '星期二',
      unread: 0,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
      isMuted: false
    },
    {
      id: '25',
      name: '大学室友群',
      lastMessage: '老四: 我下月结婚',
      time: '星期一',
      unread: 15,
      avatar: 'https://randomuser.me/api/portraits/lego/25.jpg',
      isMuted: false
    },
    {
      id: '26',
      name: '外卖商家',
      lastMessage: '记得给五星好评哦',
      time: '2023/12/05',
      unread: 0,
      avatar: 'https://randomuser.me/api/portraits/lego/26.jpg',
      isMuted: false
    },
    {
      id: '27',
      name: '钱十一',
      lastMessage: '代码已review',
      time: '14:20',
      unread: 0,
      avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
      isMuted: false
    },
    {
      id: '28',
      name: '宠物交流群',
      lastMessage: '推荐这款猫粮不错',
      time: '星期日',
      unread: 0,
      avatar: 'https://randomuser.me/api/portraits/lego/28.jpg',
      isMuted: true
    },
    {
      id: '29',
      name: '李十二',
      lastMessage: '项目进度如何了？',
      time: '星期五',
      unread: 2,
      avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
      isMuted: false
    },
    {
      id: '30',
      name: '旅行计划群',
      lastMessage: '机票已订好',
      time: '2023/11/28',
      unread: 0,
      avatar: 'https://randomuser.me/api/portraits/lego/30.jpg',
      isMuted: false
    }
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
  const renderChatItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => (navigation as any).navigate('Chat')}
    >
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.chatContent}>
        <View style={styles.chatHeader}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
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
