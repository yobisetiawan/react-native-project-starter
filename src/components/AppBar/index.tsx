import React from 'react';
import {StatusBar} from 'react-native';

const Component = () => {
  return <StatusBar barStyle="light-content" backgroundColor="#000" hidden />;
};

export default React.memo(Component);
