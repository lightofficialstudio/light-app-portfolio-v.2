import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    Dimensions,
    ImageBackground,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import FloatingLabelInput from "../../components/input/floating-label-input.tsx";

const { height } = Dimensions.get('window');

export default function SignInScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            {/* Header with Image */}
            <View style={styles.headerContainer}>
                <ImageBackground
                    source={require('../../assets/background/login-screen.png')}
                    style={styles.headerBackground}
                    resizeMode="cover"
                >
                    <View style={styles.overlay} />
                    <View style={styles.headerContent}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon name="chevron-back" size={24} color="#fff" />
                        </TouchableOpacity>
                        {/*<Text style={styles.headerText}>Sign in</Text>*/}
                    </View>
                </ImageBackground>
            </View>

            {/* Form */}
            <ScrollView contentContainerStyle={styles.formContainer}>
                <View style={{
                    position: 'relative',
                    marginBottom: 24,
                }}>

                    <FloatingLabelInput
                        label="Email"
                        value={email}
                        onChangeText={setEmail}
                        iconLeft={<Icon name="mail-outline" size={20} color="#0047FF" />}
                    />

                </View>

                <View >
                    <FloatingLabelInput
                        label="Password"
                        value={password}
                        secureTextEntry={!showPassword}
                        onChangeText={setPassword}
                        iconLeft={<Icon name="lock-closed-outline" size={20} color="#aaa" />}
                        iconRight={
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Icon
                                    name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                                    size={20}
                                    color="#aaa"
                                />
                            </TouchableOpacity>
                        }
                    />
                </View>

                <TouchableOpacity style={styles.forgotPassword}>
                    <Text style={{ color: '#0047FF', fontWeight: 'bold' }}>Forgot password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("OtpFirstPage")}>
                    <Text style={styles.loginText}>Log in</Text>
                </TouchableOpacity>

                <View style={styles.orRow}>
                    <View style={styles.line} />
                    <Text style={styles.orText}>or</Text>
                    <View style={styles.line} />
                </View>

                <TouchableOpacity style={styles.signupButton}>
                    <Text style={styles.signupText}>Sign up</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        height: height * 0.25,
        // borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        overflow: 'hidden',
    },
    headerBackground: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    headerContent: {
        paddingHorizontal: 24,
        paddingTop: 20,

    },
    headerText: {
        color: '#ffffff',
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 10,
    },
    formContainer: {
        paddingHorizontal: 32,
        paddingVertical: 32,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        paddingVertical: 10,
        marginBottom: 16,
    },
    inputIcon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#000',
    },
    forgotPassword: {
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    loginButton: {
        backgroundColor: '#0047FF',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 16,
    },
    loginText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    orRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    orText: {
        marginHorizontal: 10,
        color: '#999',
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ddd',
    },
    signupButton: {
        borderColor: '#0047FF',
        borderWidth: 1,
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
    },
    signupText: {
        color: '#0047FF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
