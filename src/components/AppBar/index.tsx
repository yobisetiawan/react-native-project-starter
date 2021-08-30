import React from 'react';
import {StatusBar} from 'react-native';

const Component = () => {
  return <StatusBar barStyle="light-content" backgroundColor="#000" />;
};

export default React.memo(Component);
