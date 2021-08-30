import React from 'react';
import {Box, Heading, Button, Center, Input} from 'native-base';
import {useNavigation, StackActions} from '@react-navigation/native';
import {View} from 'react-native';

import s from '../styles';

const Component = () => {
  const navigation = useNavigation();

  return (
    <View style={s.authWrap}>
      <Box m={10}>
        <Box h={30} w={30} mt={4} bg="blue.300" mb={4} />
        <Heading mb={8} size="xl">
          Daftar
        </Heading>
        <Input mb={3} placeholder="Email" />
        <Input mb={3} placeholder="Password" />
        <Input mb={8} placeholder="Ulangi Password " />
        <Center>
          <Button
            width={150}
            onPress={() => {
              navigation.dispatch(StackActions.replace('Main'));
            }}>
            Daftar
          </Button>
        </Center>
      </Box>
      <Button
        borderRadius={0}
        onPress={() => {
          navigation.dispatch(StackActions.replace('Login'));
        }}>
        Sudah punya akun? Login
      </Button>
    </View>
  );
};

export default React.memo(Component);
