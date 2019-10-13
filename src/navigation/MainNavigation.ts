import { createBottomTabNavigator } from "react-navigation-tabs";

import { SharePlace, FindPlace } from "../screens";

interface bottomTabs {
  SharePlace: any;
  FindPlace: any;
}

const bottomTabs = {
  SharePlace,
  FindPlace
};

const navigationOptions = {
  initialRouteName: "SharePlace"
};

export const MainTabs = createBottomTabNavigator(
  bottomTabs as any,
  navigationOptions as object
);
