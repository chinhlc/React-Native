import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class SimpleProp extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}