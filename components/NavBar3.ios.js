'use strict';

import React, {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const NavBar = React.createClass({
  getInitialState: function() {
    return {
      clicked: false,
      text: '',
    };
  },

  render: function() {
    let inner;
    return (
      <View style={styles.container}>
        <View/>
        <Text style={styles.text}>
          SURGE
        </Text>
        <View/>
      </View>
    );
  }
});

const styles = {
  container: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 25,
    paddingTop: 5,
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
    flex: 1,
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '300',
  },
  profile: {
    height: 25,
    width: 25,
    marginLeft: 10,
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  textInput: {
    height: 20,
    flex: 1,
    color: 'white',
  },
  textInputWrapper: {
    marginRight: 10,
    marginLeft: 10,
    borderColor: 'white',
    borderBottomWidth: 1,
    flex: 1,
    marginBottom: 4,
  },
};

export default NavBar;
