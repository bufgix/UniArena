/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@/components';
import { observer } from 'mobx-react-lite';
import firestore from '@react-native-firebase/firestore';
import { View, StyleSheet, Text } from 'react-native';
import { QuestionType } from '@/types';

import { useQuestions, useStatusBar } from '@/utils/hooks';
import * as Icons from '@/components/icons';
import changeNavBarColor from 'react-native-navigation-bar-color';
import colors from '@/styles/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { QuizStackProps } from '@/navigation';
import { useStore } from '@/models';

function Quiz() {
  const initialTime = 69;
  const questionsContext = useQuestions();
  const store = useStore();
  const navigation = useNavigation<StackNavigationProp<QuizStackProps>>();
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [selected, setSelected] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [remainingTime, setRemainingTıme] = useState<number>(initialTime); //Nice
  const [points, setPoints] = useState<number>(0);
  const [trueCount, setTrueCount] = useState<number>(0);
  const [falseCount, setFalseCount] = useState<number>(0);
  const currentQuestion: QuestionType = React.useMemo(() => {
    if (questionsContext) {
      return questionsContext?.questions[questionIndex];
    } else {
      return {
        a: 'A',
        b: 'B',
        c: 'C',
        d: 'D',
        correctAnswer: 'A',
        point: '0',
        questionText: 'Question',
      };
    }
  }, [questionIndex, questionsContext]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTıme(remainingTime - 1);
      } else {
        // implement time done
        clearInterval(timer);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [remainingTime]);

  useEffect(() => {
    changeNavBarColor(colors.Primary, false, true);
  }, []);
  useStatusBar('light-content', true);

  const SendData = async () => {
    const currentUserRef = await firestore()
      .collection('users')
      .doc(store.user.googleData?.uid)
      .get();
    const currentUserData = currentUserRef.data();
    currentUserRef.ref.update({
      point: currentUserData?.point + points,
      solved: currentUserData?.solved + trueCount + falseCount,
      solvedSucess: currentUserData?.solvedSucess + trueCount,
    } as {
      point: number;
      solved: number;
      solvedSucess: number;
    });
  };

  const NextButton = () => {
    //If an option is selected
    if (selected !== null && questionsContext) {
      //If not the last question
      if (questionIndex < questionsContext?.questions.length - 1) {
        if (selected === currentQuestion.correctAnswer) {
          setPoints(points + Number.parseInt(currentQuestion.point));
          setTrueCount(trueCount + 1);
        } else {
          setFalseCount(falseCount + 1);
        }
        setQuestionIndex(questionIndex + 1);
        setSelected(null);
      } else {
        SendData().then(() => {
          navigation.navigate('Results', {
            trueCount,
            falseCount,
            remainingTime: initialTime - remainingTime,
          });
        });
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        {/* Total points */}
        <View style={styles.info}>
          <Text style={styles.infoText}>{points}P</Text>
        </View>

        {/* Remaining time */}
        <View style={[styles.info, { flexDirection: 'row' }]}>
          <Icons.Clock color={colors.Primary} style={styles.clockIcon} />
          <Text style={styles.infoText}>{remainingTime}</Text>
        </View>
      </View>

      {/* Text of the question */}
      <Text style={styles.questionText}>{currentQuestion.questionText}</Text>

      {/* haha hardcode go brrr */}
      <View style={styles.questionContainer}>
        <TouchableOpacity
          onPress={() => {
            setSelected(selected !== 'A' ? 'A' : null);
          }}
          style={[
            styles.option,
            { marginBottom: 20 },
            selected === 'A' ? { backgroundColor: colors.Primary } : undefined,
          ]}>
          <View
            style={[
              styles.optionCircle,
              selected === 'A' ? { borderColor: 'white' } : undefined,
            ]}>
            <Icons.Check color="white" style={styles.checkIcon} />
          </View>
          <Text
            style={[
              styles.optionText,
              selected === 'A' ? { color: 'white' } : undefined,
            ]}>
            {currentQuestion.a}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelected(selected !== 'B' ? 'B' : null);
          }}
          style={[
            styles.option,
            { marginBottom: 20 },
            selected === 'B' ? { backgroundColor: colors.Primary } : undefined,
          ]}>
          <View
            style={[
              styles.optionCircle,
              selected === 'B' ? { borderColor: 'white' } : undefined,
            ]}>
            <Icons.Check color="white" style={styles.checkIcon} />
          </View>
          <Text
            style={[
              styles.optionText,
              selected === 'B' ? { color: 'white' } : undefined,
            ]}>
            {currentQuestion.b}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelected(selected !== 'C' ? 'C' : null);
          }}
          style={[
            styles.option,
            { marginBottom: 20 },
            selected === 'C' ? { backgroundColor: colors.Primary } : undefined,
          ]}>
          <View
            style={[
              styles.optionCircle,
              selected === 'C' ? { borderColor: 'white' } : undefined,
            ]}>
            <Icons.Check color="white" style={styles.checkIcon} />
          </View>
          <Text
            style={[
              styles.optionText,
              selected === 'C' ? { color: 'white' } : undefined,
            ]}>
            {currentQuestion.c}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelected(selected !== 'D' ? 'D' : null);
          }}
          style={[
            styles.option,
            selected === 'D' ? { backgroundColor: colors.Primary } : undefined,
          ]}>
          <View
            style={[
              styles.optionCircle,
              selected === 'D' ? { borderColor: 'white' } : undefined,
            ]}>
            <Icons.Check color="white" style={styles.checkIcon} />
          </View>
          <Text
            style={[
              styles.optionText,
              selected === 'D' ? { color: 'white' } : undefined,
            ]}>
            {currentQuestion.d}
          </Text>
        </TouchableOpacity>
      </View>
      <Button text="Cevapla" onPress={NextButton} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.Primary,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  topContainer: {
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  info: {
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clockIcon: { width: 20, height: 20, marginRight: 2 },
  infoText: { color: colors.Primary, fontSize: 20, fontWeight: '700' },
  questionText: {
    color: 'white',
    width: '90%',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
  },
  questionContainer: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 25,
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  checkIcon: { width: 24, height: 24 },
  optionCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 999,
    borderColor: colors.Primary,
  },
  optionText: { fontSize: 20, color: colors.Primary },
  option: {
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.Primary,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default observer(Quiz);
