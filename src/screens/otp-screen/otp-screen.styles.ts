import {Dimensions, StyleSheet} from 'react-native';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    iconGoBack: {
      fontSize: 20,
        paddingLeft: 20,
    },
    innerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', // ✅ อยู่กลางจอแนวตั้ง
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 32,
        textAlign: 'center',
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.8,
        marginBottom: 32,
    },
    otpInput: {
        width: 48,
        height: 56,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        fontSize: 20,
        color: '#000',
    },
    submitButton: {
        backgroundColor: '#0047FF',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    submitText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    resendContainer: {
        marginTop: 10,
    },
    resendTextActive: {
        fontSize: 14,
        color: '#0047FF',
        fontWeight: 'bold',
    },
    resendTextDisabled: {
        fontSize: 14,
        color: '#aaa',
    },
});
