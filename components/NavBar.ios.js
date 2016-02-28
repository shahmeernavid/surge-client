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
    if (!this.state.clicked) {
      return (
          <View style={styles.container}>
            <TouchableOpacity onPress={() => {
              DataFetcher.isOpen = true;
              global.root.forceUpdate();
            }}>
              <Image
                style={styles.profile}
                source={require('../icons/profile.png')}
              />
            </TouchableOpacity>
            <Text style={styles.text}>
              SURGE
            </Text>
            <TouchableOpacity onPress={() => this.setState({clicked: true})}>
              <Image
                style={styles.icon}
                source={require('../icons/search.png')}
              />
            </TouchableOpacity>
          </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.textInputWrapper}>
            <TextInput
              placeholder="Whatcha looking for?"
              placeholderTextColor="#CBC9C9"
              style={styles.textInput}
              onChangeText={(text) => {this.setState({text}); this.props.onType(text)}}
              value={this.state.text}
            />
          </View>
          <TouchableOpacity onPress={() => this.setState({clicked: false})}>
              <Image
                style={styles.icon}
                source={require('../icons/cross.png')}
              />
            </TouchableOpacity>
        </View>
      );
    }
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
