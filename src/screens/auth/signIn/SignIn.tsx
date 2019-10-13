import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

import { DefaultInput, ButtonOpacity } from "../../../components";

interface Props {
  navigation: any;
}

interface State {
  username: string;
}

class SignInScreen extends React.Component<Props, State> {
  state = {
    username: ""
  };

  changeTextHandler = (value: string) => {
    this.setState({
      username: value
    });
  };

  static navigationOptions = {
    title: "Login"
  };

  render() {
    return (
      <View style={styles.authContainer}>
        <Text>LOGIN</Text>
        <DefaultInput
          placeholder="Username"
          onChangeText={this.changeTextHandler}
          value={this.state.username}
        />
        <DefaultInput onChangeText={() => null} placeholder="Password" />
        <ButtonOpacity
          onPress={() => this.props.navigation.navigate("SharePlace")}
          color="orange"
        >
          Login
        </ButtonOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  authContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default SignInScreen;
