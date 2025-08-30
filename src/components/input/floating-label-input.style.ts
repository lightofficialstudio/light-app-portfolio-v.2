import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00B0F0',
    },
    innerWrapper: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: 'center',
    },
    logo: {
        width: 140,
        height: 50,
        alignSelf: 'center',
        marginBottom: 12,
    },
    cimbLogo: {
        width: 80,
        height: 20,
        alignSelf: 'center',
        marginVertical: 6,
    },
    subtitle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 14,
    },
    helperText: {
        color: '#fff',
        textAlign: 'center',
        marginVertical: 12,
        fontSize: 13,
        lineHeight: 18,
    },
    rememberRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    rememberText: {
        fontSize: 13,
        color: '#fff',
    },
    forgotText: {
        fontSize: 13,
        color: '#fff',
        textDecorationLine: 'underline',
    },
    loginBtn: {
        backgroundColor: '#ccc',
        borderRadius: 999,
        paddingVertical: 16,
        alignItems: 'center',
        marginBottom: 24,
    },
    loginText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#666',
    },
    orDivider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#fff',
    },
    orText: {
        marginHorizontal: 12,
        color: '#fff',
    },
    registerBtn: {
        backgroundColor: '#003865',
        borderRadius: 999,
        paddingVertical: 16,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        marginBottom: 24,
    },
    registerText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
    version: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 12,
    },
});
