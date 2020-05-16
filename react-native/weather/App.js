import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello world!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'red',
    fontSize: 30,
  },
});

export default HelloWorldApp;
