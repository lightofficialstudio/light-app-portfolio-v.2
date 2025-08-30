import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6F6FD',
    },
    listContent: {
        padding: 16,
        gap: 12,
    },
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
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 16,
        paddingTop: 12,
        paddingBottom: 8,
    },

    topBarTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#333',
        marginBottom: 6,
    },

    transferButton: {
        backgroundColor: '#B4ECEB',
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 4,
        alignSelf: 'flex-start',
    },

    transferButtonText: {
        color: '#007B8C',
        fontWeight: '500',
        fontSize: 13,
    },

    topBarIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },

    iconBtn: {
        alignItems: 'center',
        gap: 2,
    },

    iconLabel: {
        fontSize: 10,
        color: '#555',
    },
});
