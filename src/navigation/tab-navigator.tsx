// src/navigation/TabNavigator.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/home-screen/home-screen.tsx';
import PlaceholderScreen from '../screens/placeholder-screen';
import {Platform} from 'react-native';

type BottomTabParamList = {
    Home: undefined;
    PopPay: undefined;
    Banking: undefined;
    CloudPocket: undefined;
    Notification: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const TabNavigator = () => {
    const icons: Record<keyof BottomTabParamList, string> = {
        Home: 'home-outline',
        PopPay: 'qr-code-outline',
        Banking: 'cash-outline',
        CloudPocket: 'cloud-outline',
        Notification: 'notifications-outline',
    };

    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => (
                    <Icon name={icons[route.name]} size={22} color={color} />
                ),
                tabBarActiveTintColor: '#00B0F0',
                tabBarInactiveTintColor: '#999',
                headerShown: false,
                tabBarStyle: {
                    height: Platform.OS === 'ios' ? 70 : 60,
                    paddingBottom: Platform.OS === 'ios' ? 10 : 6,
                    paddingTop: 6,
                    backgroundColor: '#fff',
                    borderTopWidth: 0, // no border
                    elevation: 0, // no shadow (Android)
                    shadowOpacity: 0, // no shadow (iOS)
                },
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: '400',
                },
            })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="PopPay" component={PlaceholderScreen} />
            <Tab.Screen name="Banking" component={PlaceholderScreen} />
            <Tab.Screen name="CloudPocket" component={PlaceholderScreen} />
            <Tab.Screen name="Notification" component={PlaceholderScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
