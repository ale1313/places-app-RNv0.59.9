import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import ButtonOpacity from '../ButtonOpacity/ButtonOpacity';
import imagePreview from '../../assets/testImage.jpg';

const ImagePicker = () => {
    return(
        <View style={styles.container}>
            <View style={styles.placeholder}>
                <Image source={imagePreview} style={styles.imagePreview}/>
            </View>
            <View>
                <ButtonOpacity color='red'>Choose an image</ButtonOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center'
    },
    placeholder: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eee',
        width: '80%',
        height: 150
    },
    imagePreview: {
        width: '100%',
        height: '100%'
    }
})

export default ImagePicker;