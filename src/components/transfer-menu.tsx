// components/TransferMenu.tsx
import React, {useRef, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Pressable,
} from 'react-native';
import Popover from 'react-native-popover-view';
import Icon from 'react-native-vector-icons/Ionicons';

export function TransferMenu() {
    const [isVisible, setIsVisible] = useState(false);
    const buttonRef = useRef();

    return (
        <View>
            <TouchableOpacity
                ref={buttonRef}
                onPress={() => setIsVisible(true)}
                style={styles.triggerButton}>
                <Text style={styles.triggerText}>โอนเงินเข้า +</Text>
            </TouchableOpacity>

            <Popover
                isVisible={isVisible}
                from={buttonRef}
                onRequestClose={() => setIsVisible(false)}
                placement="bottom"
                arrowStyle={styles.arrow}
                backgroundStyle={{backgroundColor: 'transparent'}}>
                <View style={styles.menuContainer}>
                    <Text style={styles.menuTitle}>โอนเงินเข้าบัญชี MAKE ของคุณ</Text>

                    <View style={styles.accountBox}>
                        <Icon name="logo-usd" size={20} color="#00B0F0" />
                        <View style={{flex: 1}}>
                            <Text style={styles.accountName}>น้องเมค ขยันออม</Text>
                            <Text style={styles.accountNumber}>8-888-81234-8</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.copyBtn}>คัดลอก</Text>
                        </TouchableOpacity>
                    </View>

                    <MenuItem icon="logo-kubernetes" label="โอนเงินเข้าด้วย K PLUS" />
                    <MenuItem icon="qr-code-outline" label="รับเงินด้วย QR" />
                    <MenuItem icon="business-outline" label="โอนเงินเข้าด้วยธนาคารอื่น" />
                </View>
            </Popover>
        </View>
    );
}

function MenuItem({icon, label}: {icon: string; label: string}) {
    return (
        <TouchableOpacity style={styles.menuItem}>
            <Icon name={icon} size={20} color="#00B0F0" style={{marginRight: 12}} />
            <Text style={styles.menuLabel}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    triggerButton: {
        backgroundColor: '#B4ECEB',
        borderRadius: 100,
        paddingHorizontal: 14,
        paddingVertical: 6,
        alignSelf: 'flex-start',
        marginTop: 4,
    },
    triggerText: {
        color: '#007B8C',
        fontWeight: '600',
        fontSize: 13,
    },
    arrow: {
        borderTopColor: '#fff',
    },
    menuContainer: {
        width: 280,
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        gap: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 8,
    },
    menuTitle: {
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 4,
        color: '#333',
    },
    accountBox: {
        backgroundColor: '#E6F6FD',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        gap: 8,
    },
    accountName: {
        fontSize: 12,
        color: '#666',
    },
    accountNumber: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
    copyBtn: {
        fontSize: 12,
        color: '#00B0F0',
        fontWeight: '600',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F2F8FA',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    menuLabel: {
        fontSize: 14,
        color: '#333',
    },
});
