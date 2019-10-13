import * as React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { ListItem } from "../../../components";
import { addPlace } from "../../../actions";

interface Props {
  allPlaces: any[];
  onItemSelected: <T extends string>(key: T) => any;
}

class FindPlaceScreen extends React.Component<Props> {
  static navigationOptions = {
    title: "Find Places"
  };
  render() {
    let { allPlaces, onItemSelected } = this.props;
    if (allPlaces.length > 0) {
      return (
        <FlatList
          data={allPlaces}
          keyExtractor={<T extends any>(item: T) => item.key as string}
          renderItem={({ item }) => (
            <ListItem
              placeName={item.name}
              selectItem={() => {
                onItemSelected(item.key as string);
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
            No places have been shared yet. Be the first one!
          </Text>
        </View>
      );
    }
  }
}

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
const mapStateToProps = (state: any) => {
  return {
    allPlaces: state.placesReducer.savedPlaces
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onAddPlace: (name: string) => dispatch(addPlace(name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindPlaceScreen);
