/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {AppWrap} from './src/components';

import Router from './src/routes';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppWrap>
        <Router />
      </AppWrap>
    </Provider>
  );
};

export default App;
