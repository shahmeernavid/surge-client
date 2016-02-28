'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

const WiggleMove = 1;

class Button extends Component {
  render() {
    let {item, left, top, radius} = this.props;
    let height = Math.sqrt(Math.pow(radius * 2, 2) / 2);
    let width = height;
    let borderRadius = width/2;
    let backgroundColor = (this.props.selected) ? '#25143F' : '#3B2164';

    return (
      <View style={[styles.container, {left, top, width, height, borderRadius, backgroundColor}]}>
        <Text style={styles.content}>{item}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    color: '#FFFFFF',
  },
});

export default Button;
