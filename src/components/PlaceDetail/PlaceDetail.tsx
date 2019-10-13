import * as React from "react";
import { Modal, View, Text, Image, Button, StyleSheet } from "react-native";

interface Props {
  selectedPlace: { image: any; name: string; key: string };
  onModalClosed: () => any;
  onItemDeleted: <T extends string>(key: T) => any;
}

const PlaceDetail = (props: Props) => {
  let { selectedPlace, onModalClosed, onItemDeleted } = props;
  let modalContent: any = null;
  if (selectedPlace) {
    modalContent = (
      <View>
        <Image style={styles.placeImage} source={selectedPlace.image} />
        <Text style={styles.placeText}>{selectedPlace.name}</Text>
      </View>
    );
  }
  return (
    <Modal
      onRequestClose={onModalClosed}
      visible={selectedPlace !== null}
      animationType="fade"
    >
      <View>
        {modalContent}
        <View>
          <Button
            title="Delete"
            color="red"
            onPress={() => onItemDeleted(selectedPlace.key)}
          />
          <Button title="Close" onPress={onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  placeImage: {
    marginTop: 50,
    width: "100%",
    height: 200
  },
  placeText: {
    fontSize: 20,
    margin: 6,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default PlaceDetail;
