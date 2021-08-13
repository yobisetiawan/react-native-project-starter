import React from 'react';
import {Text, View} from 'react-native';

import s from './styles';

const Component = () => {
  return (
    <View style={s.wrap}>
      <Text style={s.text}>About</Text>
    </View>
  );
};

export default React.memo(Component);
