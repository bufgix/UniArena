import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text } from 'react-native-elements';
import { Button } from 'react-native-elements';
import type { RootStackProps } from '@/navigation';

type NavigaitonProps = StackNavigationProp<RootStackProps, 'MainStack'>;

export default function Ranks() {
  const navigation = useNavigation<NavigaitonProps>();

  return (
    <SafeAreaView>
      <Text h1>Ranks</Text>
      <Button
        disabled
        title="Open"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </SafeAreaView>
  );
}
