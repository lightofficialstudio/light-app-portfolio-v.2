import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export function PocketCard({item, onPress}: {item: any; onPress: () => void}) {
    return (
        <TouchableOpacity style={styles.pocketCard} onPress={onPress}>
            <View style={styles.iconWrapper}>
                <Icon name={item.icon} size={28} color="#00B0F0" />
            </View>
            <Text style={styles.pocketTitle}>{item.title}</Text>
            <Text style={styles.pocketBalance}>{item.balance.toLocaleString()}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    pocketCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        flex: 1,
        padding: 16,
        marginBottom: 12,
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        shadowOffset: {width: 0, height: 2},
    },
    iconWrapper: {
        backgroundColor: '#E0F7FF',
        borderRadius: 999,
        padding: 12,
        marginBottom: 8,
    },
    pocketTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
        textAlign: 'center',
    },
    pocketBalance: {
        fontSize: 13,
        color: '#888',
    },
});

