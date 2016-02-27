'use strict';

import React, {
  Image,
  Text,
  TextInput,
  View,
} from 'react-native';

const TouchableWithoutFeedback = require('TouchableWithoutFeedback');

const Search = React.createClass({
  getInitialState: function() {
    return {
      clicked: false,
      text: 'test',
    };
  },

  render: function() {
    let inner;
    if (!this.state.clicked) {
      inner = (
        <TouchableWithoutFeedback onPress={() => this.setState({clicked: true})}>
          <Image
            style={styles.icon}
            source={require('../icons/search.png')}
          />
        </TouchableWithoutFeedback>
      );
    } else {
      inner = (
        <View style={styles.textInputWrapper}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {this.setState({text}); this.props.onType(text)}}
            value={this.state.text}
          />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {inner}
      </View>
    );
  }
});

const styles = {
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  icon: {
    height: 40,
    width: 40,
    marginLeft: 10,
  },
  textInput: {
    height: 40,
    flex: 1,
    color: 'white',
  },
  textInputWrapper: {
    marginRight: 10,
    marginLeft: 10,
    borderColor: 'white',
    borderBottomWidth: 1,
    flex: 1,
  }
}

export default Search;
