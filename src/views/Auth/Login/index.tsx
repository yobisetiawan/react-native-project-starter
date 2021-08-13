import React from 'react';
import {Box, Heading, Button, Center, Input, Link} from 'native-base';
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
        <Box h={60} w={60} mt={4} bg="blue.300" mb={4} />
        <Heading mb={8} size="xl">
          Login
        </Heading>
        <Input mb={3} placeholder="Email" />
        <Input mb={8} placeholder="Password" />
        <Center>
          <Button
            width={150}
            onPress={() => {
              navigation.dispatch(StackActions.replace('Main'));
            }}>
            Masuk
          </Button>
          <Link
            onPress={() => {
              navigation.dispatch(
                CommonActions.navigate({
                  name: 'ForgotPassword',
                }),
              );
            }}
            mt={4}>
            Lupa Password ?
          </Link>
        </Center>
      </Box>
      <Button
        borderRadius={0}
        onPress={() => {
          navigation.dispatch(
            CommonActions.navigate({
              name: 'Register',
            }),
          );
        }}>
        Belum punya akun? Daftar Sekarang
      </Button>
    </View>
  );
};

export default React.memo(Component);
