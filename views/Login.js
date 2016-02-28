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

import {FBSDKLoginManager} from 'react-native-fbsdklogin';
import {FBSDKGraphRequest} from 'react-native-fbsdkcore';

const Login = React.createClass({
  getInitialState: function() {
    return {
      error: null,
    };
  },

  login: function() {

    FBSDKLoginManager.logInWithReadPermissions(['email'], (error, result) => {
      if (error) {
        alert('Error logging in.');
      }
      else {
        if (result.isCancelled) {
          alert('Login cancelled.');
        }
        else {
          new FBSDKGraphRequest((error, res) => {
            if (error) {
              alert('Error making request.');
            }
            else {
              console.log(res);
              DataFetcher.data.email = res.email;
              this.props.navigator.resetTo(Routes[0]);
            }
          }, '/me?fields=email').start();
        }
      }
    });
  },

  render: function() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => {
          this.login();
        }}>
          <Image
            style={styles.icon}
            source={require('../icons/facebook.png')}
          />
          <Text style={styles.buttontext}>
            Login With Facebook
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#532f8c',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '100',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#25143F',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 100,
    alignItems: 'center',
  },
  icon: {
    height: 40,
    width: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  buttontext: {
    textAlign: 'left',
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '100',
    flex: 1,
  }
});

export default Login;
