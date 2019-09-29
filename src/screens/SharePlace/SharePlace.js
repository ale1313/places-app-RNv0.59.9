import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

import ButtonOpacity from '../../components/ButtonOpacity/ButtonOpacity';
import ImagePicker from '../../components/ImagePicker/ImagePicker';
import LocationPicker from '../../components/LocationPicker/LocationPicker';
import DefaultInput from '../../components/DefaultInput/DefaultInput';

class SharePlaceScreen extends Component {
    state = {
        place: '',
    };

    static navigationOptions = {
        title: 'Share Places'
    };

    changePlaceHandler = val => {
        this.setState({
            place: val
        });
    };
    
    savePlaceHandler = () => {
        this.props.onAddPlace();
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.headingText}>Share a place with us!</Text>
                <DefaultInput
                placeholder='Place Name'
                onChangeText={this.changePlaceHandler}
                value={this.state.place}
                />
                <ImagePicker />
                <LocationPicker />
                <ButtonOpacity color='red' onPress={this.savePlaceHandler}>Submit</ButtonOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    headingText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default SharePlaceScreen;