import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS
} from 'react-native';

// import {unauthUser} from '../actions';
// onLogout: function() {
//   this.props.dispatch(unauthUser);
// },
// <TouchableOpacity onPress={this.onLogout}>
//   <Text>
//     Logout
//   </Text>
// </TouchableOpacity>

      // <NavigatorIOS
      //   initialRoute={{
      //     component: TodoList,
      //     title: 'Todo List',
      //     navigationBarHidden: true
      //   }}
      //   style={{flex: 1}}/>

// import TodoList from './TodoList';

var Main = React.createClass({
  render() {
    return (
      <TouchableOpacity>
        <Text>
          Logout
        </Text>
      </TouchableOpacity>
    );
  }
});

module.exports = Main;
