import React, {AppRegistry, Navigator} from 'react-native';
import Root from './views/Root';
import Routes from './Routes';
import DataFetcher from './shit/DataFetcher';

const stuff = React.createClass({
  componentWillMount: function() {
    DataFetcher.fetch();
  },

  render: function() {
    return (
      <Navigator
        initialRoute={Routes[4]}
        renderScene={(route, navigator) => {
          if (route.component) {
            let props = {navigator, view: route.component};
            if (route.props) {
              props = {...props, ...route.props};
            }
            return React.createElement(Root, props);
          }
        }}
      />
    );
  }
});

AppRegistry.registerComponent('surge', () => stuff);
