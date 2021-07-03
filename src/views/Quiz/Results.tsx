/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react-lite';
import { View, StyleSheet, Text } from 'react-native';

import { Button } from '@/components';

import type { QuizStackProps, RootStackProps } from '@/navigation';
import { useStatusBar } from '@/utils/hooks';
import colors from '@/styles/colors';

type NavigationProps = StackNavigationProp<RootStackProps>;

function Results() {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<RouteProp<QuizStackProps, 'Results'>>();
  useStatusBar('dark-content', true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={[styles.text, { color: colors.Primary }]}>Sonuçlar</Text>
        <Text style={[styles.text, { color: 'black', marginTop: 50 }]}>
          Toplam Süre: {route.params.remainingTime}s
        </Text>
        <Text style={[styles.text, { color: '#35bd00', marginTop: 20 }]}>
          Doğru Cevap: {route.params.trueCount}
        </Text>
        <Text style={[styles.text, { color: '#d6201d', marginTop: 20 }]}>
          Yanlış Cevap: {route.params.falseCount}
        </Text>
      </View>
      <Button
        style={styles.button}
        onPress={() => {
          navigation.navigate('MainStack', { screen: 'Arena' });
        }}
        text="İlerle"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Primary,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  resultContainer: {
    marginTop: 30,
    paddingVertical: 30,
    width: '90%',
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { fontSize: 30, fontWeight: '700' },
  button: { marginBottom: 30 },
});

export default observer(Results);
