import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Geolocation,
} from 'react-native';

import ReviewStars from './reviewStars';

export default class DriverListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distanceCalculated: false,
    }
  }

  render() {
    let { driver } = this.props;
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.touchableContainer}
      >
        <Image
          style={styles.picture}
          source={{ uri: driver.profilePicture }}
        />
        <Text style={styles.nameText}>
          {driver.name}
        </Text>
        <View style={styles.driverInfoContainer}>
          <ReviewStars stars={this._getAverageReview(driver.rating)} />
          {
            this.state.distanceCalculated &&
            <Text>{this._getDistance(driver.coordinates)} away</Text>
          }
        </View>

      </TouchableOpacity>
    );
  }

  _getAverageReview(rating) {
    let totalRatings = 0;
    let ratingCount = 0;
    if (rating.cleanliness) {
      totalRatings += rating.cleanliness;
      ratingCount++;
    }
    if (rating.comfort) {
      totalRatings += rating.comfort;
      ratingCount++;
    }
    if (rating.navigation) {
      totalRatings += rating.navigation;
      ratingCount++;
    }
    if (rating.pickup) {
      totalRatings += rating.pickup;
      ratingCount++;
    }
    if (rating.service) {
      totalRatings += rating.service;
      ratingCount++;
    }

    let average = totalRatings / ratingCount;
    return average;
  }

  _getDistance(coordinates) {

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
  },
  driverInfoContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 4,
  },
});