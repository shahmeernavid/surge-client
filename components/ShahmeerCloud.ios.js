const Physics = require('../shit/Physics');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Renderer from '../shit/Renderer';

const Cloud = React.createClass({
  getInitialState: function() {
    return {
      // world: Physics(),
    };
  },

  componentDidMount: function() {
    // var ball = Physics.body('circle', {
    //   x: 50, // x-coordinate
    //   y: 30, // y-coordinate
    //   vx: 0.2, // velocity in x-direction
    //   vy: 0.01, // velocity in y-direction
    //   radius: 20
    // });
    // // add the circle to the world
    // this.state.world.add(ball);


    // subscribe to the ticker
    // Physics.util.ticker.on(function( time ){
    //   this.state.world.step(time);
    // });
    // start the ticker
    // Physics.util.ticker.start();
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    );
  }
});

const styles = {
  container: {
    flex: 1,
  },
};

export default Cloud;
