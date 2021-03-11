import React, { useState, useCallback, useEffect } from 'react';
import { Platform, StyleSheet, Image, TouchableOpacity, Text, TextInput, View } from 'react-native';

export function InputField(props) {
    let empty = '';
    const [value, onChangeText] = useState("What's happening?");

    return (
        <View style={props.style}>
            <View style={styles.container}>
                <TextInput
                style={styles.textInput}
                onFocus={empty => onChangeText(empty)}
                onChangeText={text => onChangeText(text)}
                value={value}
                />
                <TouchableOpacity
                style={styles.send}
                >
                    <View
                    style={styles.sendButton}
                    >
                        <Text style={{color: '#ffffff'}}>POST</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 100,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    textInput: {
        flex: 80,
        padding: 10,
    },
    send: {
        flex: 20,
    },
    sendButton: {
        height: 35,
        borderRadius: 20,
        backgroundColor: '#006D77',
        alignItems: 'center',
        justifyContent: 'center',
    },
});