import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS
} from 'react-native';

import {unauthUser} from '../actions';
// import TodoList from './TodoList';

// <NavigatorIOS
//   initialRoute={{
//     component: TodoList,
//     title: 'Todo List',
//     navigationBarHidden: true
//   }}
//   style={{flex: 1}}/>


var Main = React.createClass({
  
  onLogout: function() {
    this.props.dispatch(unauthUser);
  },
  
  render() {
    return (
      <TouchableOpacity onPress={this.onLogout}>
        <Text>
          Logout
        </Text>
      </TouchableOpacity>
    );
  }
});

module.exports = Main;
