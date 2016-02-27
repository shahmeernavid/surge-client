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

class surge extends Component {
  constructor() {
    super();

    this.state = {
      items: items
    };
  }

  render() {
    const typeHandler = query => {
      this.setState({items: items.filter(item => item.startsWith(query))});
    };

    return (
      <View style={styles.container}>
        <NavBar />
        <Cloud items={items} />
        <Search onType={typeHandler} />
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
});

AppRegistry.registerComponent('surge', () => surge);
