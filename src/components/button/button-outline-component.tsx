import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface OutlineButtonProps {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export default function OutlineButton({ title, onPress, style, textStyle }: OutlineButtonProps) {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderColor: '#ffffff',
        borderWidth: 2,
        paddingVertical: 14,
        borderRadius: 32,
        alignItems: 'center',
        marginBottom: 12,
    },
    text: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
