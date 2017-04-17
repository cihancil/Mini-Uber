import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

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
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});