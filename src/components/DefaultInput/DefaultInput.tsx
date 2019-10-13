import * as React from "react";
import { View, TextInput, StyleSheet } from "react-native";

interface Props {
  placeholder: string;
  onChangeText: <T extends string>(val: T) => any;
  value?: string;
}

const DefaultInput = (props: Props) => {
  const { placeholder, onChangeText, value } = props;
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#ddd",
    width: "80%",
    height: 20,
    margin: 5
  }
});

export default DefaultInput;
