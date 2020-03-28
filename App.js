import React from 'react';
import RootWithNavigationState from './src';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { getStore, getPersistor } from './src/store';

/**
 * Create app component with store provider
 */
export default class App extends React.Component {
  render() {
    const myStore = getStore();  
    const myPersistor = getPersistor();

    return (
      <Provider store={myStore}>
        <PersistGate loading={null} persistor={myPersistor}>
          <RootWithNavigationState />
        </PersistGate>
      </Provider>
    );
  }
}