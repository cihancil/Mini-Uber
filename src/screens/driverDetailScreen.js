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
  }

  static navigationOptions = {
    headerVisible: false,
  }

  render() {
    let driver = this.props.navigation.state.params.driver;
    return (
      <View style={styles.container}>
        <Map />
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