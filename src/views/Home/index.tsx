import React from 'react';
import {View} from 'react-native';

import {Heading} from 'native-base';

//import s from './styles';

const Component = () => {
  return (
    <View>
      <Heading mb={8} size="xl">
        Pembelian Tiket
      </Heading>
    </View>
  );
};

export default React.memo(Component);
