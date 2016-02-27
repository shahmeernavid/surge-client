'use strict';
import React, {
  Component,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CloudItem from './CloudItem';

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Rectangle {
  construct(left, top) {
    this.bottom = top + 20;
    this.left = left;
    this.right = left + 100;
    this.top = top;
  }
}

function overlaps(rectangles, rectangle) {
  for (let rect of rectangles) {
    if (rect.bottom < rectangle.top) continue;
    if (rect.left > rectangle.right) continue;
    if (rect.right < rectangle.left) continue;
    if (rect.top > rectangle.bottom) continue;

    return true;
  }

  return false;
}

class Cloud extends Component {
  render() {
    let rectangles = [];
    const items = this.props.items.map((item, i) => {
      let left = getRandomIntInclusive(1, 99) * 10;
      let top = getRandomIntInclusive(1, 39) * 10;
      let rect = new Rectangle(left, top);
      let tries = 0;
      while (overlaps(rectangles, rect)) {
        left = getRandomIntInclusive(1, 99) * 10;
        top = getRandomIntInclusive(1, 39) * 10;
        rect = new Rectangle(left, top);
        if (tries++ > 100) break;
      }

      rectangles.push(rect);

      return <CloudItem item={item} key={i} left={left} top={top} />;
    });

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{width: 1000}} horizontal={true}>
          {items}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#9BC2CF',
    height: 400,
    width: 500,
  },
});

export default Cloud;
