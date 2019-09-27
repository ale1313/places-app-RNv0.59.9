import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import DefaultInput from '../../components/DefaultInput/DefaultInput';
import ButtonOpacity from '../../components/ButtonOpacity/ButtonOpacity';

class AuthScreen extends Component {
    state = {
        username: ''
    }
    
    changeTextHandler = value => {
        this.setState({
            username: value
        })
    }

    static navigationOptions = {
        title: 'Login'
    }

    render () {
        return (
            <View style={styles.authContainer}>
                <Text>LOGIN</Text>
                <DefaultInput placeholder='Username' onChangeText={this.changeTextHandler} value={this.state.username}/>
                <DefaultInput placeholder='Password'/>
                <ButtonOpacity
                onPress={() => this.props.navigation.navigate('Tabs')}
                color='orange'
                >
                    Login
                </ButtonOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    authContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default AuthScreen;