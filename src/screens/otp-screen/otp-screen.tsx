import React, { useRef, useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

import {styles} from './otp-screen.styles.ts';
import Icon from "react-native-vector-icons/Ionicons";
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setLogin} from '../../stores/slice/auth-slice.ts'

export default function OtpScreen() {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const length = 6;
    const [otp, setOtp] = useState(Array(length).fill(''));
    const [counter, setCounter] = useState(60);
    const [canResend, setCanResend] = useState(false);
    const inputs = useRef<Array<TextInput | null>>([]);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (counter > 0) {
            timer = setInterval(() => {
                setCounter(prev => prev - 1);
            }, 1000);
        } else {
            setCanResend(true);
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [counter]);

    const handleChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < length - 1) {
            inputs.current[index + 1]?.focus();
        }

        if (index === length - 1 && text) {
            inputs.current[index]?.blur();
        }
    };

    const handleKeyPress = (key: string, index: number) => {
        if (key === 'Backspace' && otp[index] === '' && index > 0) {
            inputs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = () => {
        const code = otp.join('');
        navigation.navigate("App")
        dispatch(setLogin(true));
        console.log('OTP entered:', code);
        // ส่ง code ไป backend
    };

    const handleResend = () => {
        if (!canResend) return;

        console.log('🔁 Resend OTP triggered');
        setOtp(Array(length).fill(''));
        setCounter(60);
        setCanResend(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.iconGoBack}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="chevron-back" size={24} color="#333" />
                </TouchableOpacity>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={styles.innerContainer}
            >
                <Text style={styles.title}>Enter OTP</Text>
                <Text style={styles.subtitle}>We’ve sent a 6-digit code to your number</Text>

                <View style={styles.otpContainer}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={ref => (inputs.current[index] = ref)}
                            value={digit}
                            onChangeText={text => handleChange(text.replace(/[^0-9]/g, ''), index)}
                            onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, index)}
                            keyboardType="numeric"
                            maxLength={1}
                            style={styles.otpInput}
                            autoFocus={index === 0}
                            textAlign="center"
                        />
                    ))}
                </View>

                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitText}>Continue</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.resendContainer} onPress={handleResend}>
                    {canResend ? (
                        <Text style={styles.resendTextActive}>Resend OTP</Text>
                    ) : (
                        <Text style={styles.resendTextDisabled}>Resend in {counter}s</Text>
                    )}
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
