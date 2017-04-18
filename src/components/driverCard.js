import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import ReviewStars from './reviewStars';

export default class DriverCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let { driver } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.mainInfoContainer}>
          <Image
            style={styles.picture}
            source={{ uri: driver.profilePicture }}
          />
          <Text style={styles.nameText}>
            {driver.name}
          </Text>
          <View style={{ flex: 1 }} />
          <Text style={styles.distanceText}>away</Text>
        </View>
        <Text style={styles.ratingsHeaderText}>Ratings</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>Comfort: </Text>
          <ReviewStars stars={driver.rating.comfort} />
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>Pickup: </Text>
          <ReviewStars stars={driver.rating.pickup} />
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>Navigation: </Text>
          <ReviewStars stars={driver.rating.navigation} />
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>Service: </Text>
          <ReviewStars stars={driver.rating.service} />
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>Cleanliness: </Text>
          <ReviewStars stars={driver.rating.cleanliness} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 4, right: 0, left: 0,
    flex: 1,
    elevation: 4,
    backgroundColor: "white",
    margin: 4,
    borderRadius: 4,
    padding: 8,
  },
  mainInfoContainer: {
    flex: 1,
    flexDirection: "row",
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
  distanceText: {
    marginTop: 4,
  },
  ratingsHeaderText: {
    marginTop: 16,
    paddingBottom: 4,
    flex: 1,
    borderBottomWidth: 2,
    borderColor: "#dddddd",
  },
  ratingText: {
    marginRight: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    paddingVertical: 2,
    alignItems: "center",
  },
});