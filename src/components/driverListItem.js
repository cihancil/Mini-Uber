import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

export default class DriverListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let { driver } = this.props;
    return (
      <TouchableOpacity
        style={styles.touchableContainer}
      >
        <Image
          style={styles.picture}
          source={{ uri: driver.profilePicture }}
        />
        <Text style={styles.nameText}>
          {driver.name}
        </Text>
        <View>


        </View>

      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  touchableContainer: {
    flexDirection: "row",
    marginBottom: 8,
  },
  picture: {
    width: 64,
    height: 64,
  },
  nameText: {
    marginLeft: 8,
    marginTop: 4,
    fontWeight: "bold",
  }
});