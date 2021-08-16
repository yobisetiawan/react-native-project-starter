import React from 'react';
import {Heading} from 'native-base';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../../redux/slice/CounterSlice';

import {RootState} from '../../redux/store';

//import s from './styles';

const Component = () => {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <View>
      <View>
        <Heading mb={8} size="xl">
          Akun
        </Heading>
        <Text>{counter.value}</Text>
        <TouchableWithoutFeedback
          onPress={() => {
            dispatch(increment());
          }}>
          <Text>+</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            dispatch(decrement());
          }}>
          <Text>-</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default React.memo(Component);
