import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

import {
  ButtonOpacity,
  LocationPicker,
  ImagePicker,
  DefaultInput
} from "../../../components";
import { addPlace } from "../../../actions/index";

interface Props {
  onAddPlace: <T extends string>(place: T) => any;
}

interface State {
  place: string;
}

class SharePlaceScreen extends React.Component<Props, State> {
  state = {
    place: ""
  };

  static navigationOptions = {
    title: "Share Places"
  };

  changePlaceHandler = (val: string) => {
    this.setState({
      place: val
    });
  };

  savePlaceHandler = () => {
    this.props.onAddPlace(this.state.place);
    this.setState({
      place: ""
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headingText}>Share a place with us!</Text>
        <DefaultInput
          placeholder="Place Name"
          onChangeText={this.changePlaceHandler}
          value={this.state.place}
        />
        <ImagePicker />
        <LocationPicker />
        <ButtonOpacity color="red" onPress={this.savePlaceHandler}>
          Submit
        </ButtonOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold"
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
)(SharePlaceScreen);
