import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import Weather from './Weather';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [temp, setTemp] = useState(null);
  const [weather, setWeather] = useState(null);

  const getGeoLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        fetch(
          `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=478fc5b3477f7b31dfbc56cac9229157`,
        )
          .then((response) => response.json())
          .then((json) => {
            setTemp(json.main.temp);
            setWeather(json.weather[0].main);
            setIsLoaded(true);
          });
      },
      (error) => {
        setError(error);
      },
    );
  };

  useEffect(() => {
    getGeoLocation();
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        {isLoaded ? (
          <LinearGradient
            colors={['#00c6fb', '#005bea']}
            style={styles.weatherContainer}>
            <View style={styles.upper}>
              <Icon
                name={weatherCases[weather].icon}
                size={120}
                style={styles.icon}></Icon>
              <Weather temp={temp} />
            </View>
            <View style={styles.lower}>
              <Text style={styles.title}>{weatherCases[weather].title}</Text>
              <Text style={styles.subTitle}>
                {weatherCases[weather].subtitle}
              </Text>
            </View>
          </LinearGradient>
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the weather</Text>
            <Text>{error}</Text>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export default App;

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
  },
  weatherContainer: {
    flex: 1,
  },
  upper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
  },
  lower: {
    justifyContent: 'flex-end',
    paddingBottom: 20,
    paddingLeft: 20,
  },
  title: {
    color: 'white',
    fontSize: 30,
  },
  subTitle: {
    color: 'white',
    fontSize: 30,
  },
  loading: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
    paddingLeft: 20,
    backgroundColor: '#fdf6aa',
  },
  loadingText: {
    fontSize: 38,
  },
});
