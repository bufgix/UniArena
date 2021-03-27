import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackProps } from '@/navigation';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/models';
import { useStatusBar } from '@/utils/hooks';

type NavigaitonProps = StackNavigationProp<RootStackProps, 'MainStack'>;

function Arena() {
  const navigation = useNavigation<NavigaitonProps>();
  const store = useStore();
  useStatusBar('dark-content', true);

  const doLogout = () => {
    store.user.logout().then(() => {
      navigation.navigate('LoginStack', { screen: 'LoginScreen' });
    });
  };

  return (
    <SafeAreaView>
      <Text h1>Arena</Text>
      <Button title="Log out" onPress={doLogout} />
    </SafeAreaView>
  );
}

export default observer(Arena);
