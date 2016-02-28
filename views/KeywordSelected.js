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

const KeywordSelected = React.createClass({
  getInitialState: function() {
    return {
      filteredItems: [],
      selectedWords: [],
      loading: true,
    };
  },

  componentDidMount: function() {
    DataFetcher.fetchModifiers(this.props.word, () => {
      console.log(DataFetcher.getModifiersForKeyword(this.props.word));
      this.setState({loading: false, filteredItems: DataFetcher.getModifiersForKeyword(this.props.word)})
    });
  },

  render: function() {
    if (this.state.loading){
      return (
        <View style={styles.container}>
          <ActivityIndicatorIOS
            animating={true}
            style={{height: 80, alignItems: 'center', justifyContent: 'center', flex: 1}}
            size="large"
          />
        </View>
      );
    }


    const typeHandler = query => {
      this.setState({filteredItems: DataFetcher.getModifiersForKeyword(this.props.word).filter(
          item => item.startsWith(query.toLowerCase()))});
    };

    let text = `Any customizations for your ${this.props.word.toLowerCase()}?`;
    if (this.state.selectedWords.length) {
      text = `${this.state.selectedWords.length} customizations selected for your burger.`;
    }

    let done;
    if (this.state.selectedWords.length) {
      let props = {customizations: this.state.selectedWords, keyword: this.props.word};
      let route = {...Routes[2], props};
      done = (
        <TouchableOpacity onPress={() => this.props.navigator.push(route)}>
          <Text style={styles.done}>Next</Text>
        </TouchableOpacity>
      );
    }


    return (
      <View style={styles.container}>
        <NavBar onType={typeHandler} navigator={this.props.navigator} />
        <Text style={styles.title}>{text}</Text>
        <ShahmeerCloud selectedWords={this.state.selectedWords} words={this.state.filteredItems} click={(word) => {
          let idx = this.state.selectedWords.indexOf(word);
          if (idx === -1) {
            this.setState({
              selectedWords: [...this.state.selectedWords, word],
            });
          }
          else {
            let words = [...this.state.selectedWords];
            words.splice(idx, 1);
            this.setState({
              selectedWords: words,
            });
          }
        }} />
        {done}
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
});

export default KeywordSelected;
