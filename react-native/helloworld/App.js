import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Text, Button, Alert} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.redView} />
      <View style={styles.yellowView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  redView: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    alignSelf: 'flex-start',
  },
  yellowView: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
    alignSelf: 'flex-start',
  },
});
