import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import ListItem from '../../components/ListItem/ListItem';



class FindPlaceScreen extends Component {
    
    static navigationOptions = {
        title: 'Find Places'
    };

    render () {
        if(this.props.allPlaces.length > 0) {
            return(
                <FlatList
                data={this.props.allPlaces}
                keyExtractor={item => 
                    item.key
                }
                renderItem={({item}) => 
                    <ListItem
                    placeName={item.name}
                    deleteItem={() => {this.props.onItemSelected(item.key)}}
                    placeImage={item.image}
                    />
                }
                />
            ) 
        } else {
            return(
                <View style={styles.placesListContainer}>
                    <Text style={styles.placesListEmpty}>No places have been shared yet. Be the first one!</Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    placesListContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    placesListEmpty: {
        fontSize: 17
    }
});

export default FindPlaceScreen;