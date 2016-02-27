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

import Cloud from './components/Cloud';
import NavBar from './components/NavBar';
import Search from './components/Search';

class surge extends Component {
  render() {
    const items = [
      'Burger',
      'Pizza',
      'Steak',
      'Pasta',
      'Chinese',
      'Japenese',
      'Ramen',
      'Noodles',
      'Soup',
      'Pizza',
      'Burger',
      'Chicken',
      'Salad',
      'Sandwich',
      'Pasta',
      'Fruits',
      'Candy',
      'Pho',
      'Pizza',
      'Burger',
      'Chicken',
      'Salad',
      'Sandwich',
      'Pasta',
      'Fruits',
      'Candy',
      'Pho',
      'Pizza',
      'Burger',
      'Chicken',
      'Salad',
      'Sandwich',
      'Pasta',
      'Fruits',
      'Candy',
      'Pho',
      'Pizza',
      'Burger',
      'Chicken',
      'Salad',
      'Sandwich',
      'Pasta',
      'Fruits',
      'Candy',
      'Pho',
    ];

    return (
      <View style={styles.container}>
        <NavBar />
        <Cloud items={items} />
        <Search />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6ED8FA',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
});

AppRegistry.registerComponent('surge', () => surge);
