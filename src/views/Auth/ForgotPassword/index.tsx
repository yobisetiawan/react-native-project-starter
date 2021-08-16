import React from 'react';
import {Box, Heading, Button, Center, Input} from 'native-base';
import {
  useNavigation,
  StackActions,
  CommonActions,
} from '@react-navigation/native';
import {View} from 'react-native';

import s from '../styles';

const Component = () => {
  const navigation = useNavigation();

  return (
    <View style={s.authWrap}>
      <Box m={10}>
        <Box h={30} w={30} mt={4} bg="blue.300" mb={4} />
        <Heading mb={8} size="xl">
          Lupa Password
        </Heading>
        <Input mb={3} placeholder="Email" />

        <Center>
          <Button
            width={150}
            onPress={() => {
              navigation.dispatch(StackActions.replace('Main'));
            }}>
            Kirim
          </Button>
        </Center>
      </Box>
      <Button
        borderRadius={0}
        onPress={() => {
          navigation.dispatch(
            CommonActions.navigate({
              name: 'Login',
            }),
          );
        }}>
        Ingat password ? Login
      </Button>
    </View>
  );
};

export default React.memo(Component);
