/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  DeviceEventEmitter,
  Dimensions,
  PickerIOS,
  StyleSheet,
  Text,
  View,
  ActivityIndicatorIOS,
} from 'react-native';

import DataFetcher from '../shit/DataFetcher';
import NavBar from '../components/NavBar';
import Search from '../components/Search';
import ShahmeerCloud from '../components/ShahmeerCloud';
import Routes from '../Routes';

export default class surge extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
      loading: true,
    };
  }

  componentDidMount() {
    DataFetcher.fetchKeywords(() => {
      this.setState({loading: false, items: DataFetcher.getKeywords()})
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicatorIOS
            animating={true}
            style={{height: 80, alignItems: 'center', justifyContent: 'center', flex: 1}}
            size="large"
          />
        </View>
      );
    }

    const typeHandler = query => {
      this.setState({items: DataFetcher.getKeywords().filter(item => item.startsWith(query.toLowerCase()))});
    };

    return (
      <View style={styles.container}>
        <NavBar onType={typeHandler} />
        <Text style={styles.title}>Hungry for awesomeness?</Text>
        <ShahmeerCloud words={this.state.items} click={(word) => {
          let props = {word};
          this.props.navigator.push({...Routes[1], props});


        }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#532f8c',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '100',
    marginTop: 10,
    marginBottom: 10,
  },
});

