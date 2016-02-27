/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  PickerIOS,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import NavBar from './components/NavBar';

class surge extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6ED8FA',
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('surge', () => surge);
