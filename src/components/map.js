import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  InteractionManager,
} from 'react-native';
import MapView from 'react-native-maps';


export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      overlay: true,
    }
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({ ready: true })
    });
    setTimeout(() => {
      this.setState({ overlay: false })
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.ready &&
          <MapView
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          />
        }
        {
          this.state.overlay &&
          <View
            style={styles.overlay}
          ></View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    position: "absolute",
    top: 0, bottom: 0, right: 0, left: 0,

  },
  overlay: {

    position: "absolute",
    top: 0, bottom: 0, right: 0, left: 0,
    backgroundColor: "#dddddd",
  }
});