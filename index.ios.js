/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Cloud from './components/Cloud';

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
        <Cloud items={items} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('surge', () => surge);
