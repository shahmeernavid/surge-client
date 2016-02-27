'use strict';

import React, {
  Image,
  Text,
  View,
} from 'react-native';

const NavBar = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.profile}
          source={require('../icons/profile.png')}
        />
        <Text style={styles.text}>
          SURGE
        </Text>
        <View style={styles.profile} />
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
};

export default NavBar;
