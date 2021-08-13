import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Home from '../views/Home';
import About from '../views/About';

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Analitics">
      <Tab.Screen name="Analitics" component={Home} />
      <Tab.Screen name="Profile" component={About} />
    </Tab.Navigator>
  );
};

const Component = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default React.memo(Component);
