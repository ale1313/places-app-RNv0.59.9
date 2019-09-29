import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { connect } from 'react-redux';

import AuthScreen from './Auth/Auth';
import SharePlaceScreen from './SharePlace/SharePlace';
import FindPlaceScreen from './FindPlace/FindPlace';

const TabNavigator = createBottomTabNavigator(
    {
        Share: SharePlaceScreen,
        Find: FindPlaceScreen
    },
    {
        initialRouteName: 'Share'
    }
);

const SwitchNavigator = createSwitchNavigator(
    {
        Auth: AuthScreen,
        Tabs: TabNavigator
    },
    {
        initialRouteName: 'Auth'
    }
);

const AppContainer = createAppContainer(SwitchNavigator);

const mapStateToProps = state => {
    return {
        allPlaces: state.places.savedPlaces
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: name => dispatch(addPlace(name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);