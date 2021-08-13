import React, {useEffect} from 'react';
import {Spinner, HStack, Heading, Center} from 'native-base';
import {useNavigation, StackActions} from '@react-navigation/native';

const Component = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('Login'));
    }, 1000);
  }, [navigation]);

  return (
    <Center flex={1}>
      <HStack space={2}>
        <Heading color="primary.300">Tickety</Heading>
        <Spinner accessibilityLabel="Loading posts" />
      </HStack>
    </Center>
  );
};

export default React.memo(Component);
