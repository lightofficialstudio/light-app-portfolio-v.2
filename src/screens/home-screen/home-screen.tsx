import React, {useState} from 'react'; // ✅ เพิ่ม useState
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './home-screen.styles'; // ✅ import จากไฟล์ที่แยกไว้
import {TopBar} from '../../components/top-bar-component.tsx';
import {PocketCard} from '../../components/pocket-card.tsx';
import {PocketModal} from '../../components/pocket-modal.tsx';

const pockets = [
  {title: 'Reading List', icon: 'book-outline', balance: 2108.57},
  {title: 'Graduation Fund', icon: 'school-outline', balance: 500.0},
  {title: 'Habits', icon: 'checkbox-outline', balance: 3623.0},
  {title: 'LuckyMoney', icon: 'gift-outline', balance: 263.0},
  {title: 'Workout Tracker', icon: 'barbell-outline', balance: 5000.0},
  {title: 'Finance Tracker', icon: 'card-outline', balance: 580.0},
];

const HomeScreen = () => {
    const navigation = useNavigation<any>();

    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedPocket, setSelectedPocket] = useState<any>(null);

    const openModal = (item: any) => {
        setSelectedPocket(item);
        setModalVisible(true);
    };


    return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <FlatList
        data={pockets}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={{gap: 12}}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <PocketCard item={item} onPress={() => openModal(item)} />
        )}
      />

      <PocketModal
        isVisible={isModalVisible}
        item={selectedPocket}
        onClose={() => setModalVisible(false)}
        onNavigate={() => {
          setModalVisible(false);
          navigation.navigate(selectedPocket.title);
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
