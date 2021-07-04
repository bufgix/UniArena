/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react-lite';
import {
  View,
  ActivityIndicator,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';

import type { RootStackProps } from '@/navigation';
import { useQuestions, useStatusBar } from '@/utils/hooks';
import { useQuery } from 'react-query';
import { Colors } from '@/styles';
import * as Icons from '@/components/icons';
import changeNavBarColor from 'react-native-navigation-bar-color';

type NavigationProps = StackNavigationProp<RootStackProps>;

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
  const navigation = useNavigation<NavigationProps>();
  const questionsContext = useQuestions();
  useStatusBar('dark-content', true);

  useEffect(() => {
    scaleAnim.start();
  }, [scaleAnim]);

  useEffect(() => {
    changeNavBarColor(Colors.White, true, true);
  }, []);

  const { isLoading } = useQuery(
    'questions',
    questionsContext?.fetchQuestions as any,
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('QuizStack', {
                  screen: 'Quiz',
                });
              }}>
              <Icons.Swords color={Colors.White} />
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
}

export default observer(Arena);
