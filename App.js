import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "react-navigation-tabs";
import FontIcon from "react-native-vector-icons/FontAwesome"; 
import Icon from "react-native-vector-icons/FontAwesome5";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Home from './src/container/Home';
import Calls from './src/container/Calls';
import Help from './src/container/Help';
import Profile from './src/container/Profile';
import { createAppContainer } from 'react-navigation';


const RootStack = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: "Explore",
      tabBarIcon: ({tintColor}) => (
        <Icon name="search" color={tintColor} size={20} />
      )
    }
  },
  Calls: {
    screen: Calls,
    navigationOptions: {
      tabBarLabel: "Tasks",
      tabBarIcon: ({tintColor}) => (
        <Icon name="tasks" color={tintColor} size={20} />
      )
    }
  },
  Help: {
    screen: Help,
    navigationOptions: {
      tabBarLabel: "HELP",
      tabBarIcon: ({tintColor}) => (
        <FontIcon name="question" color={tintColor} size={20} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: ({tintColor}) => (
        <MaterialIcon name="person" color={tintColor} size={20} />
      )
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: '#618a85',
    inactiveTintColor: '#41465082',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0.3,
      shadowOffset: {
        width: 5,
        height: 3
      },
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
});

const App = createAppContainer(RootStack);
export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
