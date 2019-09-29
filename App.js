import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();
import AppContainer from './src/screens/index';

class App extends Component {
    render () {
        return(
            <Provider store={store} >
                <AppContainer />
            </Provider>
        )
    }
}

export default App;