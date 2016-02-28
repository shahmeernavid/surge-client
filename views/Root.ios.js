import React from 'react-native';
import SideMenu from 'react-native-side-menu';
import Menu from '../components/Menu';

const Root = React.createClass({
  render: function() {
    let woooow = <Menu navigator={this.props.navigator} />;

    let elem = React.createElement(this.props.view, this.props);
    let out =  (
      <SideMenu isOpen={DataFetcher.isOpen} menu={woooow}>
        { elem }
      </SideMenu>
    );

    global.root = this;

    return out;
  }
});


export default Root;
