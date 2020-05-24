import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import LinearGradient from 'react-native-linear-gradient';

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temp: null,
    weatherName: null,
  };
  componentDidMount() {
    Geolocation.getCurrentPosition(
      (position) => {
        fetch(
          `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=478fc5b3477f7b31dfbc56cac9229157`,
        )
          .then((response) => response.json())
          .then((json) => {
            this.setState({
              isLoaded: true,
              temp: json.main.temp,
              weatherName: json.weather[0].main,
            });
          });
      },
      (error) => {
        this.setState({
          error,
        });
      },
    );
  }
  render() {
    const {isLoaded, error, temp, weatherName} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {isLoaded ? (
          <LinearGradient
            colors={weatherCases[weatherName].colors}
            style={styles.weatherContainer}>
            <View>
              <Text>icon</Text>
              <Text style={styles.temp}>{Math.floor(temp - 273.15)}º</Text>
            </View>
          </LinearGradient>
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the weather</Text>
            {error && <Text>{error}</Text>}
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const weatherCases = {
  Rain: {
    colors: ['#00c6fb', '#005bea'],
    title: 'Raining like a MF',
    subtitle: 'For more info look outside',
    icon: 'ios-rainy',
  },
  Clear: {
    colors: ['#fef253', '#ff7300'],
    title: 'Sunny as fuck',
    subtitle: 'Go get your ass burnt',
    icon: 'ios-sunny',
  },
  Thunderstorm: {
    colors: ['#00ecbc', '#007adf'],
    title: 'Thunderstorm in the house',
    subtitle: 'Actually, outside of the house',
    icon: 'ios-thunderstorm',
  },
  Clouds: {
    colors: ['#d7d2cc', '#304352'],
    title: 'Clouds',
    subtitle: 'I know, fucking boring',
    icon: 'ios-cloudy',
  },
  Snow: {
    colors: ['#7de2fc', '#b9b6e5'],
    title: 'Cold as balls',
    subtitle: 'Do you want to build a snowman? Fuck no.',
    icon: 'ios-snow',
  },
  Drizzle: {
    colors: ['#89f7fe', '#66a6ff'],
    title: 'Drizzle',
    subtitle: 'Is like rain, but gay',
    icon: 'ios-rainy',
  },
  Haze: {
    colors: ['#89f7fe', '#66a6ff'],
    title: 'Haze',
    subtitle: "Don't know what that is ..",
    icon: 'ios-rainy',
  },
  Mist: {
    colors: ['#89f7fe', '#66a6ff'],
    title: 'Mist',
    subtitle: "Don't know what that is ..",
    icon: 'ios-cloud',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  weatherContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    color: 'white',
    fontSize: 38,
  },
  loading: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 24,
    paddingLeft: 24,
    backgroundColor: '#fdf6aa',
  },
  loadingText: {
    fontSize: 38,
  },
});
