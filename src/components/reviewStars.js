import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class ReviewStars extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let { stars } = this.props;
    console.log(stars)

    let fullStarCount = Math.floor(stars);
    let fullStars = Array.apply(null, { length: fullStarCount })

    let emptyStarCount = 5 - fullStarCount;
    let emptyStars = Array.apply(null, { length: emptyStarCount })

    return (
      <View style={styles.container}>
        {fullStars.map((item, index) => <Icon key={"full" + index} name={"star"} />)}
        {emptyStars.map((item, index) => <Icon key={"empty" + index} name={"star-o"} />)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  }
});