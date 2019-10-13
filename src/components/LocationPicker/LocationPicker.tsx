import * as React from "react";
import { View, StyleSheet } from "react-native";

import ButtonOpacity from "../ButtonOpacity";

const LocationPicker = () => {
  return (
    <View style={styles.container}>
      <View style={styles.placeholder}></View>
      <View>
        <ButtonOpacity onPress={() => null} color="red">
          Choose a location
        </ButtonOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  }
});

export default LocationPicker;
