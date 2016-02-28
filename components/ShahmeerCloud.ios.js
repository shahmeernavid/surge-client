import React, {
  AppRegistry,
  Component,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import CloudItem from './CloudItem';
import Physics from '../shit/Physics';


const CirclePosMap = [
  {x: 10, y: 10, r: 100}, // burger
  {x: 150, y: 50, r: 120}, // pizza
  {x: 50, y: 160, r: 70}, // steak
  {x: 165, y: 225, r: 90}, // pasta
  {x: 10, y: 270, r: 110}, // chinese
  {x: 310, y: 100, r: 200}, // japanese
  {x: 200, y: 350, r: 130}, // ramen

  {x: 450, y: 390, r: 100}, // noodles
];
const MaxXPos = 600;

const Cloud = React.createClass({
  getDefaultProps: function() {
    return {
      selectedWords: [],
    };
  },

  generateCircles(keywords) {
    let width = 0;
    return {
      elems: keywords.map((word, idx) => {
        let index = idx % CirclePosMap.length;
        let x = CirclePosMap[index].x + MaxXPos * Math.floor(idx / CirclePosMap.length);
        let y = CirclePosMap[index].y;
        let r = CirclePosMap[index].r;

        width = Math.max(width, x + Math.sqrt(2) * r + 10);

        return (
          <TouchableOpacity key={idx} onPress={() => this.props.click(word)}>
            <CloudItem
              selected={this.props.selectedWords.indexOf(word) > -1}
              item={word}
              left={x}
              top={y}
              radius={r}
            />
          </TouchableOpacity>
        );
      }),
      width
    };
  },

  render: function() {
    let circData = this.generateCircles(this.props.words);
    let width = circData.width;

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{width}} horizontal={true}>
          {circData.elems}
        </ScrollView>
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
