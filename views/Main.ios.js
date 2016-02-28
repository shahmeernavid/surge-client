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
      items: DataFetcher.data.keywords,
    };
  }

  render() {
    const typeHandler = query => {
      this.setState({items: DataFetcher.data.keywords.filter(item => item.startsWith(query.toLowerCase()))});
    };

    return (
      <View style={styles.container}>
        <NavBar onType={typeHandler} />
        <Text style={styles.title}>Hungry for awesomeness?</Text>
        <ShahmeerCloud words={this.state.items} click={(word) => {
          let props = {word};
          if (DataFetcher.data.modifiers[word]) {
            this.props.navigator.push({...Routes[1], props});
          }
          else {
            this.props.navigator.push({...Routes[2], props});
          }

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

