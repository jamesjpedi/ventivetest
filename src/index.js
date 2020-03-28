import React from 'react';
import { connect } from 'react-redux';
import { createAppContainer } from 'react-navigation';

import RootNavigator from './routers/root';

/**
 * Exports class RootWithNavigationState with redux connected app root router
 * 
 * @param {object} auth Authentication state object  
 */
const RootWithNavigationState = ({ auth }) => {
  const AppNavigator = createAppContainer(RootNavigator(auth.authenticated));
  return <AppNavigator />
};

/**
 * Map Redux state to props
 * 
 * @param {object} state Reduxt state object
 */
const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(RootWithNavigationState);
