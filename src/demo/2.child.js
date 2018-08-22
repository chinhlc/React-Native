import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';


export default class ChildScreen extends Component {
  static navigationOptions = {
    title: 'Child',
  }; 
  render() {
    const { goBack } = this.props.navigation;
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <Text> { params.username } </Text>
        <Button title="Back" onPress={()=>{ goBack();}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  }
});