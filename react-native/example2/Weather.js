import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

function Weather({temp}) {
  console.log(111, temp);
  return (
    <View>
      <Text>{temp}</Text>
    </View>
  );
}

Weather.propTypes = {
  temp: PropTypes.string.isRequired,
};

export default Weather;
