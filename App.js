/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen';
import PostScreen from './src/screens/PostScreen';
import CommentListScreen from './src/screens/CommentListScreen';

const options = {
  title: '#ChuyenCuaDev',
  headerTintColor: '#FFF',
  headerStyle: {
    backgroundColor: '#005ea0'
  }
};

const AppNavigator = new StackNavigator(
  {
    home: {
      screen: HomeScreen,
      navigationOptions: options
    },
    post: {
      screen: PostScreen,
      navigationOptions: options
    },
    commentList: {
      screen: CommentListScreen,
      navigationOptions: options
    }
  },
  {
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
  }
);

export default AppNavigator;