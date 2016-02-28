import React, {View, Text, TouchableOpacity} from 'react-native';

import Routes from '../Routes';

import DataFetcher from '../shit/DataFetcher';

const Menu = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.item}>
            View Orders
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          DataFetcher.isOpen = false;
          this.props.navigator.resetTo(Routes[4]);
        }}>
          <Text style={styles.item}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
});

const styles = {
  container: {
    backgroundColor: '#3B2164',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1,
    paddingTop: 40,
    width: 280,
    height: 1000
  },
  item: {
    textAlign: 'left',
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '100',
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 20,
    height: 50,
    backgroundColor: '#25143F',
  },
};

export default Menu;
