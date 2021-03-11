import React, { useState, useCallback, useEffect } from 'react';
import { Platform, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Composer, GiftedChat, InputToolbar, Send } from 'react-native-gifted-chat'
import { NavigationContainer } from '@react-navigation/native';

function SMM({ navigation }) {
    const [messages, setMessages] = useState([]);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <View style={styles.container}>
            <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
            renderInputToolbar={renderInputToolbar}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212'
    },
    button: {
        flex: 1,
    },
});

function renderInputToolbar() {
    return (
        <InputToolbar
        containerStyle={{
            height: '30%',
            width: '100%'
        }}
        >
        </InputToolbar>
    )
}

function renderComposer() {
    return (
        <Composer
        placeholder='Type something here'
        />
    )
}

function renderSend() {
    return (
        <Send
        label='Post'
        />
    )
}

export default SMM;