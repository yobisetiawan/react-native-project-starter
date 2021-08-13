import React from 'react';
import {View} from 'react-native';

import s from './styles';

const Component = () => {
  return <View style={s.bg} />;
};

export default React.memo(Component);
