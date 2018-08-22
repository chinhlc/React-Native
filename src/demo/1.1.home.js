import React, { Component } from 'react';
import { Platform, Text, View, Button, StyleSheet } from 'react-native';
// import SimpleProp from './src/demo/1.2.simple';


export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  }; // Set title for page

  render() {
    const {navigate} = this.props.navigation;
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>

        <Text style={styles.instructions}>
          Di toi trang('dich den', array paragram)
        </Text>
        <Button style={styles.instructions} title="go child" onPress={()=> navigate('trangTrong', { username: 'Viet' })}></Button>
        
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

class SimpleProp extends Component {
  render() {
      return (
          <Text>Hello {this.props.name}!</Text>
      );
  }
}

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    flex: 1, 
    backgroundColor: 'powderblue',

    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
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