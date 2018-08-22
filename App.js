/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';

import HomeScreen from './src/demo/1.1.home';
import ChildScreen from './src/demo/2.child';


const NavigationApp = StackNavigator({
  Front: { screen: HomeScreen},
  trangTrong: { screen: ChildScreen},
})
// {
//   navigationOptions:{
//     headerStyle:{
//       marginTop: 5
//     }
//   }
// }

export default NavigationApp;

// export default class App extends Component {
//   render() {
//     return <NavigationApp/>;
//   }
// }