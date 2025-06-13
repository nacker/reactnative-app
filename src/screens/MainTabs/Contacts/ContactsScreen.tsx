import React, {useLayoutEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    SectionList,
    Image,
    TouchableOpacity,
} from 'react-native';
import {useNavigation} from "@react-navigation/native";

// 定义统一的数据类型
interface ContactItem {
  id: string;
  name: string;
  icon?: string;
  avatar?: string;
}

interface ContactSection {
  title: string;
  data: ContactItem[];
}

const CONTACTS_DATA: ContactSection[] = [
    {
        title: '服务',
        data: [
            { id: 'new', name: '新的朋友', icon: 'https://img.icons8.com/color/48/add-user-group-man-man.png' },
            { id: 'group', name: '群聊', icon: 'https://img.icons8.com/color/48/conference-call.png' },
            { id: 'tags', name: '标签', icon: 'https://img.icons8.com/color/48/tags.png' },
        ],
    },
    { title: 'A', data: [
            { id: 'a1', name: '阿明', avatar: 'https://i.pravatar.cc/150?img=3' },
            { id: 'a2', name: 'Alice', avatar: 'https://i.pravatar.cc/150?img=11' }
        ]},
    { title: 'B', data: [
            { id: 'b1', name: '波仔', avatar: 'https://i.pravatar.cc/150?img=5' },
            { id: 'b2', name: 'Bob', avatar: 'https://i.pravatar.cc/150?img=12' }
        ]},
    { title: 'C', data: [
            { id: 'c1', name: '陈曦', avatar: 'https://i.pravatar.cc/150?img=6' },
            { id: 'c2', name: 'Charlie', avatar: 'https://i.pravatar.cc/150?img=13' }
        ]},
    { title: 'D', data: [
            { id: 'd1', name: 'David', avatar: 'https://i.pravatar.cc/150?img=14' },
            { id: 'd2', name: 'Diana', avatar: 'https://i.pravatar.cc/150?img=15' },
            { id: 'd3', name: 'Daniel', avatar: 'https://i.pravatar.cc/150?img=16' }
        ]},
    { title: 'E', data: [
            { id: 'e1', name: 'Emma', avatar: 'https://i.pravatar.cc/150?img=17' }
        ]},
    { title: 'F', data: [
            { id: 'f1', name: 'Frank', avatar: 'https://i.pravatar.cc/150?img=18' },
            { id: 'f2', name: 'Fiona', avatar: 'https://i.pravatar.cc/150?img=19' }
        ]},
    { title: 'G', data: [
            { id: 'g1', name: 'George', avatar: 'https://i.pravatar.cc/150?img=20' }
        ]},
    { title: 'H', data: [
            { id: 'h1', name: 'Helen', avatar: 'https://i.pravatar.cc/150?img=21' },
            { id: 'h2', name: 'Henry', avatar: 'https://i.pravatar.cc/150?img=22' }
        ]},
    { title: 'I', data: [
            { id: 'i1', name: 'Ivy', avatar: 'https://i.pravatar.cc/150?img=23' }
        ]},
    { title: 'J', data: [
            { id: 'j1', name: 'Jack', avatar: 'https://i.pravatar.cc/150?img=24' },
            { id: 'j2', name: 'Julia', avatar: 'https://i.pravatar.cc/150?img=25' },
            { id: 'j3', name: 'Jason', avatar: 'https://i.pravatar.cc/150?img=26' }
        ]},
    { title: 'K', data: [
            { id: 'k1', name: 'Kevin', avatar: 'https://i.pravatar.cc/150?img=27' }
        ]},
    { title: 'L', data: [
            { id: 'l1', name: 'Lucy', avatar: 'https://i.pravatar.cc/150?img=28' },
            { id: 'l2', name: 'Leo', avatar: 'https://i.pravatar.cc/150?img=29' }
        ]},
    { title: 'M', data: [
            { id: 'm1', name: 'Mike', avatar: 'https://i.pravatar.cc/150?img=30' },
            { id: 'm2', name: 'Mia', avatar: 'https://i.pravatar.cc/150?img=31' }
        ]},
    { title: 'N', data: [
            { id: 'n1', name: 'Nancy', avatar: 'https://i.pravatar.cc/150?img=32' }
        ]},
    { title: 'O', data: [
            { id: 'o1', name: 'Oliver', avatar: 'https://i.pravatar.cc/150?img=33' },
            { id: 'o2', name: 'Olivia', avatar: 'https://i.pravatar.cc/150?img=34' }
        ]},
    { title: 'P', data: [
            { id: 'p1', name: 'Peter', avatar: 'https://i.pravatar.cc/150?img=35' }
        ]},
    { title: 'Q', data: [
            { id: 'q1', name: 'Queen', avatar: 'https://i.pravatar.cc/150?img=36' }
        ]},
    { title: 'R', data: [
            { id: 'r1', name: 'Rose', avatar: 'https://i.pravatar.cc/150?img=37' },
            { id: 'r2', name: 'Ryan', avatar: 'https://i.pravatar.cc/150?img=38' }
        ]},
    { title: 'S', data: [
            { id: 's1', name: 'Sophia', avatar: 'https://i.pravatar.cc/150?img=39' },
            { id: 's2', name: 'Sam', avatar: 'https://i.pravatar.cc/150?img=40' }
        ]},
    { title: 'T', data: [
            { id: 't1', name: 'Tom', avatar: 'https://i.pravatar.cc/150?img=41' },
            { id: 't2', name: 'Tina', avatar: 'https://i.pravatar.cc/150?img=42' }
        ]},
    { title: 'U', data: [
            { id: 'u1', name: 'Uma', avatar: 'https://i.pravatar.cc/150?img=43' }
        ]},
    { title: 'V', data: [
            { id: 'v1', name: 'Victor', avatar: 'https://i.pravatar.cc/150?img=44' }
        ]},
    { title: 'W', data: [
            { id: 'w1', name: 'William', avatar: 'https://i.pravatar.cc/150?img=45' },
            { id: 'w2', name: 'Wendy', avatar: 'https://i.pravatar.cc/150?img=46' }
        ]},
    { title: 'X', data: [
            { id: 'x1', name: 'Xander', avatar: 'https://i.pravatar.cc/150?img=47' }
        ]},
    { title: 'Y', data: [
            { id: 'y1', name: 'Yvonne', avatar: 'https://i.pravatar.cc/150?img=48' },
            { id: 'y2', name: 'Yuna', avatar: 'https://i.pravatar.cc/150?img=49' }
        ]},
    { title: 'Z', data: [
            { id: 'z1', name: 'Zoe', avatar: 'https://i.pravatar.cc/150?img=50' }
        ]}
];


type SectionListDataType = ContactItem;
type SectionListSectionType = ContactSection;

export default function ContactsScreen() {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: '通讯录',
            headerTitleAlign: 'center',
        });
    }, [navigation]);


    const renderItem = ({ item }: any) => {
        const isServiceItem = item.icon !== undefined;

        return (
            <TouchableOpacity style={styles.item}>
                <Image
                    source={{ uri: isServiceItem ? item.icon : item.avatar }}
                    style={styles.avatar}
                />
                <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <SectionList<SectionListDataType, SectionListSectionType>
                sections={CONTACTS_DATA}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title } }) =>
                    title !== '服务' ? (
                        <View style={styles.header}>
                            <Text style={styles.headerText}>{title}</Text>
                        </View>
                    ) : null
                }
                stickySectionHeadersEnabled={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#eee',
    },
    avatar: { width: 40, height: 40, borderRadius: 4, marginRight: 12 },
    name: { fontSize: 16 },
    header: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 4,
        paddingHorizontal: 16,
    },
    headerText: { fontSize: 14, fontWeight: 'bold', color: '#888' },
});
