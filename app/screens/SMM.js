import React, { useState, useCallback, useEffect } from 'react';
import { Platform, StyleSheet, View, FlatList, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { InputField } from '../Components/InputField.js';

function SMM({ navigation }) {
    const [posts, setPosts] = useState([
        {
            id: '1',
            title: 'First item',
        },
        {
            id: '2',
            title: 'Second item',
        },
        {
            id: '3',
            title: 'Third item',
        },
        {
            id: '4',
            title: 'Fourth item',
        },
        {
            id: '5',
            title: 'Fifth item',
        },
        {
            id: '6',
            title: 'Sixth item',
        },
    ])

    function renderItem({ item }) {
        return (
            <View style={styles.item}>
                <View>
                    <View style={styles.profile}/>
                </View>

                <View style={styles.textarea}>
                    <View style={styles.namefield}>
                        <Text style={styles.username}>Username</Text>
                        <Text style={styles.subtitle}>handle+timestamp</Text>
                    </View>
                    <Text style={styles.maintext}>this is gonna be a very long text asdhfjasdhfkj asdfhjkasdhfjkads  fajsdfhkjasdf</Text>
                    <Text style={styles.rating}>Rating</Text>
                </View>
            </View>
        )
    }

    function renderSeparator() {
        return (
            <View
            style={{
                height: 1,
                width: '95%',
                backgroundColor: '#ced0ce',
                alignSelf: 'center',
            }}
            />
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.feed}>
                <FlatList
                data={posts}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={renderSeparator}
                />
            </View>
            <InputField style={styles.input}/>
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
    item: {
        padding: 10,
        backgroundColor: '#222222',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textarea: {
        paddingLeft: 10,
    },
    namefield: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    profile: {
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: '#E29578',
    },
    username: {
        color: '#fff',
        fontSize: 20,
    },
    subtitle: {
        color: '#fff',
        fontSize: 12,
        paddingLeft: 3,
        paddingBottom: 3,
    },
    maintext: {
        color: '#fff',
        fontSize: 14,
        paddingBottom: 20,
    },
    rating: {
        color: '#fff',
        fontSize: 14,
    },
});

export default SMM;