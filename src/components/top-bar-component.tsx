import {Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";
import {StyleSheet} from "react-native";
import {TransferMenu} from "./transfer-menu.tsx";

export function TopBar  ()  {
    return (
        <View style={styles.topBar}>
            <View>
                <Text style={styles.topBarTitle}>Cloud Pocket</Text>
                <TouchableOpacity style={styles.transferButton}>
                    <TransferMenu />
                </TouchableOpacity>
            </View>

            <View style={styles.topBarIcons}>
                <TouchableOpacity style={styles.iconBtn}>
                    <Icon name="search-outline" size={20} color="#555" />
                    <Text style={styles.iconLabel}>บันทึกรายจ่าย</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBtn}>
                    <Icon name="document-text-outline" size={20} color="#555" />
                    <Text style={styles.iconLabel}>ประวัติรายการ</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="ellipsis-vertical" size={20} color="#555" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // 🟦 NEW - Top Bar
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 12,
        backgroundColor: '#fff', // ✅ ให้หัวพื้นขาวเหมือนใน MAKE
    },

    topBarTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#333',
        marginBottom: 6,
    },

    transferButton: {
        backgroundColor: '#B4ECEB',
        borderRadius: 100, // ✅ ทำให้กลมมากขึ้น
        paddingHorizontal: 14,
        paddingVertical: 6,
        alignSelf: 'flex-start',
        marginTop: 4,
    },

    transferButtonText: {
        color: '#007B8C',
        fontWeight: '600',
        fontSize: 13,
    },

    topBarIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        marginTop: 8,
    },

    iconBtn: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconLabel: {
        fontSize: 10,
        color: '#555',
        marginTop: 2,
    },
})
