import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class BackArrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.onPress}
      >
        <Icon
          size={24}
          name="arrow-back"
          color="black"
        />

      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 8,
    left: 8,
    width: 48,
    height: 48,
    borderRadius: 24,
    opacity: 0.4,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  }
});