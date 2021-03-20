import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {TabBard} from '@/components';

import LoginScreen from '@/views/Login/index';

import FeedScreen from '@/views/Main/Feed';
import ProfileScreen from '@/views/Main/Profile';
import RanksScreen from '@/views/Main/Ranks';
import {Colors} from '@/styles';

// navigation types
export type RootStackProps = {
  Login: LoginStackProps;
  Main: BottomBarProps | undefined;
};

export type BottomBarProps = {
  Feed: undefined;
  Ranks: undefined;
  Profile: undefined;
};

export type LoginStackProps = {
  LoginScreen: undefined;
};

const RootStack = createStackNavigator<RootStackProps>();
const BottomBar = createMaterialTopTabNavigator<BottomBarProps>();
const LoginStack = createStackNavigator<LoginStackProps>();

export const RootStackScreen = () => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="Login" component={LoginStackScreen} />
      <RootStack.Screen name="Main" component={BottomBarScreen} />
    </RootStack.Navigator>
  );
};

export const BottomBarScreen = () => {
  return (
    <BottomBar.Navigator tabBarPosition="bottom" tabBar={TabBard}>
      <BottomBar.Screen name="Feed" component={FeedScreen} />
      <BottomBar.Screen name="Ranks" component={RanksScreen} />
      <BottomBar.Screen name="Profile" component={ProfileScreen} />
    </BottomBar.Navigator>
  );
};

export const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator headerMode="none">
      <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
    </LoginStack.Navigator>
  );
};
