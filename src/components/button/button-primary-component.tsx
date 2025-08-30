import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface PrimaryButtonProps {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export default function PrimaryButton({ title, onPress, style, textStyle }: PrimaryButtonProps) {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ffffff',
        paddingVertical: 14,
        borderRadius: 32,
        alignItems: 'center',
        marginBottom: 12,
    },
    text: {
        color: '#0047FF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
