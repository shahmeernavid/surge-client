'use strict';

import React, {
  ActivityIndicatorIOS,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import DataFetcher from '../shit/DataFetcher';
import Routes from '../Routes';
import ShahmeerCloud from '../components/ShahmeerCloud';
import NavBar from '../components/NavBar2';

const FinalSelect = React.createClass({
  getInitialState: function() {
    return {
      filteredItems: DataFetcher.data.modifiers[this.props.word] || [],
      selectedWords: [],
      text: '',
      loading: false,
    };
  },

  render: function() {
    const typeHandler = query => {
      this.setState({filteredItems: DataFetcher.data.modifiers[this.props.word].filter(
          item => item.startsWith(query.toLowerCase()))});
    };

    let props = {customizations: this.state.selectedWords, keyword: this.props.word};
    let route = {...Routes[3], props};

    let loading;
    if (this.state.loading) {
      loading = <ActivityIndicatorIOS
        animating={true}
        style={{height: 80, alignItems: 'center', justifyContent: 'center', flex: 1}}
        size="large"
      />;
    }

    return (
      <View style={styles.container}>
        <NavBar onType={typeHandler} navigator={this.props.navigator} />
        <View style={styles.middleWrapper}>
          <Text style={styles.title}>Any special requests?</Text>

          <View style={styles.textInputWrapper}>
            <TextInput
              placeholder="Put it here."
              placeholderTextColor="#CBC9C9"
              style={styles.textInput}
              onChangeText={(text) => {this.setState({text})}}
              value={this.state.text}
            />
          </View>
        </View>

        {loading}

        <TouchableOpacity onPress={() => {
          this.setState({loading: true});
          // Make request.
          DataFetcher.orderUp([this.props.word, ...this.state.selectedWords], () => {
            this.props.navigator.resetTo(Routes[3]);
          });
        }}>
          <Text style={styles.done}>Order Already!</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#532f8c',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '100',
    marginTop: 10,
  },
  done: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '200',
    position: 'absolute',
    bottom: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    width: 375,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#25143F80',
  },
  textInput: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
  },
  textInputWrapper: {
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#25143F',
    height: 40,
    width: 375,
    marginBottom: 100,
    marginTop: 20,
  },
  middleWrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',

  },
});

export default FinalSelect;
