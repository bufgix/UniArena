import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text } from 'react-native-elements';
import { Button } from 'react-native-elements';
import changeNavBarColor from 'react-native-navigation-bar-color';

import type { RootStackProps } from '@/navigation';
import { Colors } from '@/styles';

type NavigaitonProps = StackNavigationProp<RootStackProps, 'MainStack'>;

export default function Ranks() {
  const navigation = useNavigation<NavigaitonProps>();

  useEffect(() => {
    changeNavBarColor(Colors.White, true, true);
  }, []);

  return (
    <SafeAreaView>
      <Text h1>Ranks</Text>
      <Button
        title="Open"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </SafeAreaView>
  );
}
