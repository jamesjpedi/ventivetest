import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../screens/home';
import AboutScreen from '../screens/about';
import AccountScreen from '../screens/account';
import SettingsScreen from '../screens/settings';

/**
 * Exports tabed navigation route for the app
 */
const AppRoutes = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='home' size={30} color={tintColor} />
      ),
    }
  },
  About: {
    screen: AboutScreen,
    navigationOptions: {
      tabBarLabel: 'About',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='info' size={30} color={tintColor} />
      ),
    }
  },
  Account: {
    screen: AccountScreen,
    navigationOptions: {
      tabBarLabel: 'Account',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='user' size={30} color={tintColor} />
      ),
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='cog' size={30} color={tintColor} />
      ),
    }
  },
});

export default AppRoutes;
