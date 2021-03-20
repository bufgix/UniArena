import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '@/views/Login/index';

export type RootStackProps = {
  Login: LoginStackProps;
};

export type LoginStackProps = {
  LoginScreen: undefined;
};

export const RootStack = createStackNavigator();
const LoginStack = createStackNavigator<LoginStackProps>();

export const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator headerMode="none">
      <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
    </LoginStack.Navigator>
  );
};
