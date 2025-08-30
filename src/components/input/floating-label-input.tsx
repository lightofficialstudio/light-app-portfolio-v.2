import React, { useEffect, useRef, useState } from 'react';
import {
    Animated,
    TextInput,
    View,
    Text,
    StyleSheet,
    TextInputProps,
    ViewStyle,
    StyleProp,
} from 'react-native';

interface FloatingLabelInputProps extends TextInputProps {
    label: string;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    containerStyle?: StyleProp<ViewStyle>;
}

export default function FloatingLabelInput({
                                               label,
                                               value,
                                               onChangeText,
                                               secureTextEntry,
                                               iconLeft,
                                               iconRight,
                                               containerStyle,
                                               style,
                                               ...rest
                                           }: FloatingLabelInputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const animatedIsFocused = useRef(new Animated.Value(value ? 1 : 0)).current;

    useEffect(() => {
        Animated.timing(animatedIsFocused, {
            toValue: isFocused || !!value ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }, [isFocused, value]);

    const labelStyle = {
        position: 'absolute',
        left: iconLeft ? 28 : 0, // ⬅️ Offset for left icon
        top: animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [18, 0],
        }),
        fontSize: animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [16, 12],
        }),
        color: isFocused ? '#0047FF' : '#aaa',
    };

    return (
        <View style={[styles.wrapper, containerStyle]}>
            <Animated.Text style={labelStyle}>{label}</Animated.Text>
            <View style={styles.inputContainer}>
                {iconLeft && <View style={styles.iconLeft}>{iconLeft}</View>}
                <TextInput
                    {...rest}
                    value={value}
                    secureTextEntry={secureTextEntry}
                    style={StyleSheet.flatten([
                        styles.input,
                        iconLeft ? { paddingLeft: 32 } : {},
                        iconRight ? { paddingRight: 28 } : {},
                        style,
                    ])}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChangeText={onChangeText}
                />
                {iconRight && <View style={styles.iconRight}>{iconRight}</View>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 10,
        marginBottom: 24,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        position: 'relative',
    },
    input: {
        flex: 1,
        height: 38,
        fontSize: 16,
        color: '#000',
    },
    iconLeft: {
        position: 'absolute',
        left: 0,
        zIndex: 1,
        paddingRight: 6,
    },
    iconRight: {
        position: 'absolute',
        right: 0,
        zIndex: 1,
        paddingLeft: 6,
    },
});
