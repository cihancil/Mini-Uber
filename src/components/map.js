import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';


export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
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