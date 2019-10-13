import * as React from "react";
import {
  Text,
  TouchableWithoutFeedback,
  Image,
  View,
  StyleSheet
} from "react-native";

interface Props {
  selectItem: () => any;
  placeImage: any;
  placeName: string;
}

const ListItem = (props: Props) => {
  let { selectItem, placeImage, placeName } = props;
  return (
    <TouchableWithoutFeedback onPress={selectItem}>
      <View style={styles.listItemContainer}>
        <Image
          resizeMode="contain"
          source={placeImage}
          style={styles.placeImage}
        />
        <Text style={styles.placeName}>{placeName}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C0C0C0",
    margin: 3
  },
  placeImage: {
    width: 30,
    height: 30,
    marginRight: 5
  },
  placeName: {
    fontSize: 16,
    color: "#800000",
    textTransform: "uppercase"
  }
});

export default ListItem;
