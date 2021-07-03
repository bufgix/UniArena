import { useEffect, useContext } from 'react';
import { StatusBar, StatusBarStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { QuestionContext } from './contexts';

function useStatusBar(
  theme: StatusBarStyle = 'default',
  animated: boolean = false,
) {
  const navigation = useNavigation();
  useEffect(() => {
    const uns = navigation.addListener('focus', () => {
      StatusBar.setBarStyle(theme, animated);
    });
    return uns;
  }, [navigation, theme, animated]);
}

const useQuestions = () => {
  return useContext(QuestionContext);
};

export { useStatusBar, useQuestions };
