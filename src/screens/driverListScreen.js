import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  Text,
  ActivityIndicator,
} from 'react-native';

import { observer, inject } from 'mobx-react/native';

import DriverListItem from '../components/driverListItem';
import FadeWrapper from '../components/fadeWrapper';

@inject("store")
@observer
export default class DriverListScreen extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      fetching: true,
      dataSource: ds.cloneWithRows([]),
    };
  }

  static navigationOptions = {
    title: 'Driver List',
  }

  componentDidMount() {
    let { store } = this.props;
    store.fetchDrivers()
      .then(() => {
        console.log(store.drivers)
        this.setState({
          fetching: false,
          dataSource: this.state.dataSource.cloneWithRows(store.drivers)
        })
      })
      .catch(err => {
        alert("Please try again later")
        this.setState({
          fetching: false,
        })
      })
  }

  render() {
    let { store } = this.props;
    if (this.state.fetching) {
      return (
        <ActivityIndicator
          color="gray"
          size="large"
          style={styles.activityIndicator}
        />
      )
    }
    return (
      <ListView
        style={styles.container}
        contentContainerStyle={styles.listContent}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow.bind(this)}
        enableEmptySections={true}
      />
    );
  }

  _renderRow(rowData, sectionIndex, index) {
    return (
      <FadeWrapper>
        <DriverListItem
          onPress={this._handlePress.bind(this, rowData)}
          driver={rowData}
        />
      </FadeWrapper>
    )
  }

  _handlePress(driver) {
    this.props.navigation.navigate("DriverDetail", { driver: driver });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 8,
    paddingTop: 16,
  },
  activityIndicator: {
    padding: 16,
  }
});