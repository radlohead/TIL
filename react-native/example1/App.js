import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, PermissionsAndroid} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Geolocation from '@react-native-community/geolocation';

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

const requestLocationPermission = async () => {
  if (Platform.OS === 'ios') {
    Geolocation.requestAuthorization();
    this.getGeoLocation();
  } else {
    let granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'App Geolocation Permission',
        message: "App needs access to your phone's location.",
      },
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      this.getGeoLocation();
    } else {
      console.log('Location permission not granted!!!!');
    }
  }
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      temp: null,
      weatherName: null,
    };
  }
  getGeoLocation() {
    Geolocation.getCurrentPosition((position) => {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=478fc5b3477f7b31dfbc56cac9229157`,
      )
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            isLoaded: true,
            temp: data.main.temp,
            weatherName: data.weather[0].main,
          });
        });
    });
  }
  componentDidMount() {
    this.getGeoLocation();
  }
  render() {
    const {temp, isLoaded, weatherName} = this.state;
    if (isLoaded) {
      return (
        <View style={styles.container}>
          <LinearGradient
            colors={['#00c6fb', '#005bea']}
            style={styles.container}>
            <View style={styles.upper}>
              <Icon
                name={weatherCases[weatherName].icon}
                color="white"
                size={144}></Icon>
              <Text style={styles.temp}>{Math.floor(temp - 273.15)}º</Text>
            </View>
            <View style={styles.lower}>
              <Text style={styles.title}>Raining like a MF</Text>
              <Text style={styles.subTitle}>For more info look outside</Text>
            </View>
          </LinearGradient>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting ther weather</Text>
            <Button
              title="request permissions"
              onPress={requestLocationPermission}
            />
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    color: 'white',
    fontSize: 35,
  },
  lower: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 24,
    marginLeft: 24,
  },
  title: {
    color: 'white',
    fontSize: 24,
  },
  subTitle: {
    color: 'white',
    fontSize: 24,
  },
  loading: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#fdf6aa',
  },
  loadingText: {
    fontSize: 30,
    marginLeft: 24,
    marginBottom: 24,
  },
});
