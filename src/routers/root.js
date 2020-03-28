import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import AppRoutes from './appRoutes';
import AuthenticationRoutes from './authenticationRoutes';

/**
 * Exports navigation route based on the logged in status
 * 
 * @param {boolean} loggedIn True if logged in
 */
const RootNavigator = (loggedIn = false) => {
  return createSwitchNavigator(
    {
      appRoutes: {
        screen: AppRoutes
      },
      authenticationRoutes: {
        screen: AuthenticationRoutes
      }
    },
    {
      initialRouteName: loggedIn ? 'appRoutes' : 'authenticationRoutes'
    }
  );
}

export default RootNavigator;
