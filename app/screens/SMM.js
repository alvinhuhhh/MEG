import React, { useState, useCallback, useEffect } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FeedArea } from '../Components/FeedArea.js';
import { InputField } from '../Components/InputField.js';

function SMM({ navigation }) {
    const [messages, setMessages] = useState([]);

    return (
        <View style={styles.container}>
            <FeedArea style={styles.feed} name='Feed'/>
            <InputField style={styles.input} name='dev'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 100,
        backgroundColor: '#121212'
    },
    feed: {
        flex: 75,
    },
    input: {
        flex: 25,
    },
});

export default SMM;