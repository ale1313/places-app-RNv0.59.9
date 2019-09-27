import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const DefaultInput = props => {
    return(
        <View style={styles.container}>
            <TextInput placeholder={props.placeholder} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#ddd',
        width: '80%',
        height: 20,
        margin: 5
    }
});

export default DefaultInput;