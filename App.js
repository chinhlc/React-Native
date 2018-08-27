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
    postDetail: {
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

// yarn add faker moment
// react-navigation:  điều hướng trong app.
// faker:             tạo dữ liệu mẫu
// moment:            format ngày tháng

// <TouchableOpacity />: render một link, nhưng không có style gì cả, khi user click vào nó sẽ có hiệu ứng mờ đi một chút, nhìn nó sẽ nhẹ nhàng hơn.
                          // handlePostPressed:        dùng bind để có thể truyền thêm extra argument
// <FlatList />:         dùng để render một list.
                          // renderItem:               gọi function để lấy nội dung sau đó render vào list.
                          // ItemSeparatorComponent:   render html,style để dễ phân biệt 2 Item cạnh nhau
// <Image />:            hiển thị hình ảnh.
// Dimensions:           api để lấy kích thước màn hình.