import * as React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

interface Props {
  onPress: () => any;
  children: string;
  color: string;
}

const ButtonOpacity = (props: Props) => {
  const { onPress, children, color } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, { backgroundColor: color }]}>
        <Text>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderColor: "black",
    borderWidth: 1
  }
});

export default ButtonOpacity;
