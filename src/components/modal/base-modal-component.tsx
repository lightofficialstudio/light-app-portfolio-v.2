// src/components/BaseModal.tsx
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

export function BaseModal({
                              isVisible,
                              onBackdropPress,
                              title,
                              children,
                              onConfirm,
                              confirmLabel = 'ตกลง',
                          }: {
    isVisible: boolean;
    onBackdropPress?: () => void;
    title?: string;
    children: React.ReactNode;
    onConfirm?: () => void;
    confirmLabel?: string;
}) {
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onBackdropPress}
            useNativeDriver
            backdropOpacity={0.15}
            style={styles.centered}>
            <View style={styles.modalCard}>
                {title && <Text style={styles.modalTitle}>{title}</Text>}
                <View style={styles.modalContent}>{children}</View>
                {onConfirm && (
                    <TouchableOpacity style={styles.modalButton} onPress={onConfirm}>
                        <Text style={styles.modalButtonText}>{confirmLabel}</Text>
                    </TouchableOpacity>
                )}
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
        backgroundColor: 'rgba(255, 255, 255, 0.96)',
        width: '70%',
        borderRadius: 36,
        paddingVertical: 14,
        paddingHorizontal: 14,
        shadowColor: '#000',
        shadowOpacity: 0.18,
        shadowRadius: 3,
        shadowOffset: {width: 0, height: 8},
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 50,
        color: '#2C3E50',
        textAlign: 'center',
    },
    modalContent: {
        marginTop: 40,
        marginBottom: 30,
        width: '100%',
        alignItems: 'center',
    },
    modalButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 999,
    },
    modalButtonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});
