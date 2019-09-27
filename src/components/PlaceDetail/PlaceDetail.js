import React from 'react';
import { Modal, View, Text, Image, Button, StyleSheet } from 'react-native';

const PlaceDetail = props => {
    let modalContent = null;

    if(props.selectedPlace) {
        modalContent = (
            <View>
                <Image
                style={styles.placeImage}
                source={props.selectedPlace.image}
                />
                <Text style={styles.placeText}>{props.selectedPlace.name}</Text>
            </View>
        );
    };
    return (
        <Modal
        onRequestClose={props.onModalClosed}
        visible={(props.selectedPlace !== null)}
        animationType='fade'
        >
            <View>
                {modalContent}
                <View>
                    <Button
                    title='Delete'
                    color='red'
                    onPress={() => props.onItemDeleted(props.selectedPlace.key)}
                    />
                    <Button title='Close' onPress={props.onModalClosed}/>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    placeImage: {
        marginTop: 50,
        width: '100%',
        height: 200
    },
    placeText: {
        fontSize: 20,
        margin: 6,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default PlaceDetail;