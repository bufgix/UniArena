import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootStackProps} from '@/navigation';

type NavigaitonProps = StackNavigationProp<RootStackProps>;

export default function Login() {
  const navigation = useNavigation<NavigaitonProps>();

  return (
    <SafeAreaView>
      <Text h1>Login</Text>
      <Button title="Press Me" onPress={() => navigation.navigate('Main')} />
    </SafeAreaView>
  );
}
