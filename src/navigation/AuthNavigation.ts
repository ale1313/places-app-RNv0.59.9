import { createStackNavigator } from "react-navigation-stack";

import { SignIn } from "../screens";

interface navigationOptions {
  initialRouteName: string;
}

const navigationOptions = {
  initialRouteName: "SignIn"
};

interface stack {
  SignIn: any;
}

const stack = {
  SignIn
};

export const AuthStack = createStackNavigator(
  stack as any,
  navigationOptions as object
);
