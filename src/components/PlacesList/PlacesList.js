import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';

const PlacesList = props => {
    if(props.savedPlaces.length > 0) {
        return(
            <FlatList
            data={props.savedPlaces}
            keyExtractor={item => 
                item.key
            }
            renderItem={({item}) => 
                <ListItem
                placeName={item.name}
                deleteItem={() => {props.onItemSelected(item.key)}}
                placeImage={item.image}
                />
            }
            /> 
        )} else {
            return(
                <View style={styles.placesListContainer}>
                    <Text style={styles.placesListEmpty}>You haven't saved any places yet</Text>
                </View>
            )
        }
};

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

export default PlacesList;