import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";

import AppStack from "./src/navigation/AppNavigator";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppStack />
      </Provider>
    );
  }
}

export default App;
