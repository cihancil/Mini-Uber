import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
} from 'react-native';

export default class FadeWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0.5),
    }
  }

  componentDidMount() {
    Animated.timing(this.state.opacity,
      {
        toValue: 1,
        duration: 800,
      }).start();
  }

  render() {
    return (
      <Animated.View style={{
        opacity: this.state.opacity,
      }}>
        {this.props.children}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({

});