import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { MainTabs } from "./MainNavigation";
import { AuthStack } from "./AuthNavigation";

const AppStack = createSwitchNavigator({
  AuthStack,
  MainTabs
});

export default createAppContainer(AppStack as any);
