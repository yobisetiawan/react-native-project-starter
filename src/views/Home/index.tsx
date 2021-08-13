import React from 'react';
import {Text, View} from 'react-native';
import {Box} from 'native-base';

import s from './styles';

const Component = () => {
  return (
    <View style={s.wrap}>
      <Text style={s.text}>Home</Text>
      <Box>Hello world</Box>
    </View>
  );
};

export default React.memo(Component);
