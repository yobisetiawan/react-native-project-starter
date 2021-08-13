import React from 'react';
import {View} from 'react-native';

import AppBar from '../AppBar';

import s from './styles';

interface Props {
  children: React.ReactNode;
}
const Component = ({children}: Props) => {
  return (
    <View style={s.bg}>
      <AppBar />
      {children}
    </View>
  );
};

export default React.memo(Component);
