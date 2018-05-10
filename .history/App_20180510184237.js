/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Expo from 'expo';
import {StackNavigator} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class SimpleProp extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}
class HomeScreen extends Component {  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Text style={styles.infobottom}>
          <SimpleProp name='ChinhLC' />
        </Text>
      </View>
    );
  }
}

const NavigationApp = StackNavigator({
  Home: { screen: HomeScreen},
  Childpage: { screen: ChildScreen },
},{
  navigationOptions: {
    headerStyle: {}
  }
})

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <NavigationApp/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    flex: 1, 
    backgroundColor: 'powderblue',

    fontSize: 20,
    textAlign: 'center',
    marginBottom: 5,
  },
  instructions: {
    flex: 2,
    backgroundColor: 'skyblue',

    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  infobottom: {
    flex: 3, 
    backgroundColor: 'steelblue',

    textAlign: 'center',
  },
});

