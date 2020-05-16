import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{padding: 40}}>
        <Text style={styles.title}>Hello world!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'red',
    fontSize: 30,
  },
});

export default HelloWorldApp;
