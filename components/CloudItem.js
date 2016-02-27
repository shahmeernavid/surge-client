'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class CloudItem extends Component {
  render() {
    const {item, left, top} = this.props;

    return (
      <View style={[styles.container, {left, top}]}>
        <Text style={styles.content}>{item}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9BC2CF',
    height: 20,
    position: 'absolute',
    width: 100,
  },
  content: {
    borderRadius: 4,
    color: '#FFFFFF',
    padding: 4,
    textAlign: 'center',
  },
});

export default CloudItem;
