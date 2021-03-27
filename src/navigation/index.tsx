import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigatorScreenParams } from '@react-navigation/native';

import { TabBar, DrawerContent } from '@/components';

import LoginScreen from '@/views/Login/index';
import ArenaScreen from '@/views/Main/Arena';
import ProfileScreen from '@/views/Main/Profile';
import RanksScreen from '@/views/Main/Ranks';
import WelcomeScreen from '@/views/Login/Welcome';
import Settings from '@/views/Settings';

import { useStatusBar } from '@/utils/hooks';

// navigation types
export type RootStackProps = {
  LoginStack: NavigatorScreenParams<LoginStackProps>;
  MainStack: NavigatorScreenParams<BottomBarProps> | undefined;
};

export type BottomBarProps = {
  Arena: undefined;
  Timeline: undefined;
  Profile: undefined;
};

export type LoginStackProps = {
  LoginScreen: undefined;
  Welcome: undefined;
};

export type DrawerStackProp = {
  Ranks: undefined;
  Settings: undefined;
};

export type ArenaStackProps = {
  Main: undefined;
};

const RootStack = createStackNavigator<RootStackProps>();
const BottomBar = createMaterialTopTabNavigator<BottomBarProps>();
const LoginStack = createStackNavigator<LoginStackProps>();
const Drawer = createDrawerNavigator<DrawerStackProp>();
const ArenaStack = createStackNavigator<ArenaStackProps>();

export const RootStackScreen = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="LoginStack" component={LoginStackScreen} />
        <RootStack.Screen name="MainStack" component={BottomBarScreen} />
      </RootStack.Navigator>
    </>
  );
};

export const BottomBarScreen = () => {
  useStatusBar('dark-content');
  return (
    <BottomBar.Navigator
      initialRouteName="Timeline"
      tabBarPosition="bottom"
      tabBar={TabBar}>
      <BottomBar.Screen name="Timeline" component={DrawerStackScreen} />
      <BottomBar.Screen name="Arena" component={ArenaStackScreen} />
      <BottomBar.Screen name="Profile" component={ProfileScreen} />
    </BottomBar.Navigator>
  );
};

export const ArenaStackScreen = () => {
  return (
    <ArenaStack.Navigator headerMode="none">
      <ArenaStack.Screen name="Main" component={ArenaScreen} />
    </ArenaStack.Navigator>
  );
};

export const DrawerStackScreen = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Ranks"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Ranks" component={RanksScreen} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator headerMode="none">
      <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
      <LoginStack.Screen name="Welcome" component={WelcomeScreen} />
    </LoginStack.Navigator>
  );
};
