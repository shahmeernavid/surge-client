import React, {AppRegistry, Navigator} from 'react-native';
import Routes from './Routes';
import DataFetcher from './shit/DataFetcher';

const stuff = React.createClass({
  componentWillMount: function() {
    DataFetcher.fetch();
  },

  render: function() {
    return (
      <Navigator
        initialRoute={Routes[0]}
        renderScene={(route, navigator) => {
          console.log(route);
          if (route.component) {
            let props = {navigator};
            if (route.props) {
              props = {...props, ...route.props};
            }
            return React.createElement(route.component, props);
          }
        }}
      />
    );
  }
});

AppRegistry.registerComponent('surge', () => stuff);
