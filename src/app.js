import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'mobx-react/native';


import MainStore from './stores/mainStore';
import NavigationContainer from './containers/navigationContainer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={MainStore}>
        <NavigationContainer />
      </Provider>
    );
  }
}