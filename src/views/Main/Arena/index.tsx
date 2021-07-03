/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react-lite';
import firestore from '@react-native-firebase/firestore';
import { View, ActivityIndicator, Animated, Easing } from 'react-native';

import type { RootStackProps } from '@/navigation';
import { useStore } from '@/models';
import { useStatusBar } from '@/utils/hooks';
import { useQuery } from 'react-query';
import { Colors } from '@/styles';
import { QuestionType } from '@/types';
import * as Icons from '@/components/icons';

type NavigaitonProps = StackNavigationProp<RootStackProps, 'MainStack'>;

function Arena() {
  const scale = useRef(new Animated.Value(1)).current;
  const scaleAnim = Animated.loop(
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.1,
        duration: 300,
        easing: Easing.sin,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1.0,
        duration: 300,
        easing: Easing.sin,
        useNativeDriver: true,
      }),
    ]),
  );
  const navigation = useNavigation<NavigaitonProps>();
  const store = useStore();
  useStatusBar('dark-content', true);

  useEffect(() => {
    scaleAnim.start();
  }, []);

  const { data, isLoading, isError } = useQuery('questions', async () => {
    let questions: QuestionType[] = [];
    const snapShot = await firestore().collection('questions').get();
    snapShot.forEach(q => questions.push(q.data() as QuestionType));
    return questions;
  });

  const doLogout = () => {
    store.user.logout().then(() => {
      navigation.navigate('LoginStack', { screen: 'LoginScreen' });
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*  <Text h1>Arena</Text>
      <Button title="Log out" onPress={doLogout} /> */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {isLoading ? (
          <ActivityIndicator size="large" color={Colors.Primary} />
        ) : (
          <Animated.View
            style={{
              backgroundColor: Colors.Primary,
              padding: 20,
              borderRadius: 999,
              width: 150,
              height: 150,
              transform: [{ scale }],
            }}>
            <Icons.Swords color={Colors.White} />
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
}

export default observer(Arena);
