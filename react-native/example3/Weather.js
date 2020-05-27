import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default function Weather({temp}) {
  return (
    <View>
      <Text style={styles.temp}>{Math.floor(temp - 273.15)}º</Text>
    </View>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  temp: {
    color: 'white',
    fontSize: 48,
  },
});
