import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Map from '../components/map';
import DriverCard from '../components/driverCard';
import BackArrow from '../components/backArrow';

export default class DriverDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    let driver = this.props.navigation.state.params.driver;

    this.coordinate = {
      latitude: driver.coordinates[0],
      longitude: driver.coordinates[1],
    };
  }

  static navigationOptions = {
    headerVisible: false,
  }

  render() {
    let driver = this.props.navigation.state.params.driver;

    return (
      <View style={styles.container}>
        <Map coordinate={this.coordinate} />
        <DriverCard driver={driver} />
        <BackArrow
          onPress={() => {
            this.props.navigation.goBack()
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});