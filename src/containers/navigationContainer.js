import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

import DriverListScreen from '../screens/driverListScreen';
import DriverDetailScreen from '../screens/driverDetailScreen';

const MainStackNavigator = StackNavigator({
  DriverList: {
    screen: DriverListScreen
  },
  DriverDetail: {
    screen: DriverDetailScreen,
  },
});


export default class NavigationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <MainStackNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});