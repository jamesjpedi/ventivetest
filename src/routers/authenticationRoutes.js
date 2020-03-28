import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screens/login';
import SignupScreen from '../screens/signUp';

/**
 * Rerurns stacknavigator with navigation for unauthenticated state
 */
const AuthenticationRoutes = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Sign In',
      headerTitleAlign: 'center'
    }
  },
  Signup: {
    screen: SignupScreen,
    navigationOptions: {
      title: 'Sign Up',
      headerTitleAlign: 'center'
    }
  }
});

export default AuthenticationRoutes;
