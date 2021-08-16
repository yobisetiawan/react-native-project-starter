import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../../redux/slice/CounterSlice';

import {RootState} from '../../redux/store';

import s from './styles';

const Component = () => {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <View style={s.wrap}>
      <View>
        <Text style={s.text}>About</Text>
        <Text style={s.text}>{counter.value}</Text>
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
