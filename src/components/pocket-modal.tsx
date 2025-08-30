import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Image,
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';

export function PocketModal({
                                isVisible,
                                item,
                                onClose,
                                onNavigate,
                            }: {
    isVisible: boolean;
    item: any;
    onClose: () => void;
    onNavigate: () => void;
}) {
    if (!item) return null;

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            useNativeDriver
            backdropOpacity={0.3}
            style={styles.centered}>
            <View style={styles.modalCard}>
                <Text style={styles.modalTitle}>ย้ายเงิน</Text>

                <View style={styles.transferRow}>
                    <View style={styles.accountBox}>
                        <Icon name="wallet-outline" size={30} color="#00B0F0" />
                        <Text style={styles.accountLabel}>Cashbox</Text>
                        <Text style={styles.accountAmount}>฿ {item.balance.toLocaleString()}</Text>
                    </View>
                    <Icon name="arrow-forward" size={24} color="#999" style={{marginHorizontal: 12}} />
                    <View style={styles.accountBox}>
                        <Icon name={item.icon} size={30} color="#00B0F0" />
                        <Text style={styles.accountLabel}>{item.title}</Text>
                    </View>
                </View>

                <View style={styles.amountInput}>
                    <Text style={styles.currency}>฿</Text>
                    <Text style={styles.amountValue}>{item.balance.toLocaleString()}</Text>
                </View>

                <TextInput
                    placeholder="คำค้นเดือนดี ๆ เดือนนี้"
                    placeholderTextColor="#999"
                    style={styles.inputNote}
                />

                <TouchableOpacity style={styles.modalButton} onPress={onNavigate}>
                    <Text style={styles.modalButtonText}>ตกลง</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centered: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
    },
    modalCard: {
        backgroundColor: '#fff',
        width: '85%',
        borderRadius: 20,
        padding: 24,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 16,
        color: '#333',
    },
    transferRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    accountBox: {
        alignItems: 'center',
    },
    accountLabel: {
        fontSize: 13,
        color: '#555',
        marginTop: 4,
    },
    accountAmount: {
        fontSize: 12,
        color: '#888',
        marginTop: 2,
    },
    amountInput: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 16,
    },
    currency: {
        fontSize: 20,
        color: '#333',
        marginRight: 4,
    },
    amountValue: {
        fontSize: 28,
        fontWeight: '600',
        color: '#333',
    },
    inputNote: {
        width: '100%',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 14,
        marginBottom: 16,
        color: '#333',
    },
    modalButton: {
        backgroundColor: '#91E0DB',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 100,
    },
    modalButtonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});
