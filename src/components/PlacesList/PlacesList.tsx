import * as React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";

import ListItem from "../ListItem";

interface Props {
  savedPlaces: any[];
  onItemSelected: <T extends string>(key: T) => any;
}

const PlacesList = (props: Props) => {
  let { savedPlaces, onItemSelected } = props;
  if (savedPlaces.length > 0) {
    return (
      <FlatList
        data={savedPlaces}
        keyExtractor={<T extends any>(item: T) => item.key as string}
        renderItem={({ item }) => (
          <ListItem
            placeName={item.name as string}
            selectItem={() => {
              props.onItemSelected(item.key as string);
            }}
            placeImage={item.image as any}
          />
        )}
      />
    );
  } else {
    return (
      <View style={styles.placesListContainer}>
        <Text style={styles.placesListEmpty}>
          You haven't saved any places yet
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  placesListContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  placesListEmpty: {
    fontSize: 17
  }
});

export default PlacesList;
