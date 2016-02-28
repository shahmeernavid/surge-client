'use strict';

import React, {
  ActivityIndicatorIOS,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import DataFetcher from '../shit/DataFetcher';
import Routes from '../Routes';
import ShahmeerCloud from '../components/ShahmeerCloud';
import NavBar from '../components/NavBar3';

const Ordered = React.createClass({
  getInitialState: function() {
    return {
      error: null,
    };
  },

  render: function() {
    return (
      <View style={styles.container}>
        <NavBar />
        <View style={{flex: 1}}>
          <Text style={styles.title}>Your order was sent!</Text>
          <Text style={styles.subtitle}>We'll let you know when a restraunt accepts it.</Text>
        </View>
        <TouchableOpacity onPress={() => {
          this.props.navigator.resetTo(Routes[0])
        }}>
          <Text style={styles.done}>Cool.</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

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
  },
  subtitle: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '100',
    marginTop: 10,
  },
  done: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '200',
    position: 'absolute',
    bottom: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    width: 375,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#25143F80',
  },
  textInput: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
  },
  textInputWrapper: {
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#25143F',
    height: 40,
    width: 375,
    marginBottom: 100,
    marginTop: 20,
    flex: 1,
  },
  middleWrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  done: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '200',
    position: 'absolute',
    bottom: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    width: 375,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#25143F80',
  },
});

export default Ordered;
