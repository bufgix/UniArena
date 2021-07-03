import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-elements';
import changeNavBarColor from 'react-native-navigation-bar-color';
import { observer } from 'mobx-react-lite';

import { Colors } from '@/styles';
import { StyleSheet } from 'react-native';

function Ranks() {
  useEffect(() => {
    changeNavBarColor(Colors.White, true, true);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text h1>Ranking</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 20 },
});
export default observer(Ranks);
