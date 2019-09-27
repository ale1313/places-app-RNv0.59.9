import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const ButtonOpacity = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[styles.button, {backgroundColor: props.color}]}>
                <Text>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 5,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default ButtonOpacity;