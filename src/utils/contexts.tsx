import React, { createContext, PropsWithChildren, useState } from 'react';
import { QuestionType } from '@/types';
import firestore from '@react-native-firebase/firestore';

type QuizContextType = {
  questions: QuestionType[];
  setQuestions: React.Dispatch<React.SetStateAction<QuestionType[]>>;
  fetchQuestions: () => Promise<QuestionType[]>;
};

export const QuestionContext = createContext<QuizContextType | null>(null);

export const QuestionProvider = ({ children }: PropsWithChildren<{}>) => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);

  const fetchQuestions = async () => {
    let ques: QuestionType[] = [];
    const snapShot = await firestore().collection('questions').get();
    snapShot.forEach(q => questions.push(q.data() as QuestionType));
    ques = questions.sort(() => Math.random() - Math.random()).slice(0, 5);
    setQuestions(ques);
    return questions;
  };

  return (
    <QuestionContext.Provider
      value={{ questions, setQuestions, fetchQuestions }}>
      {children}
    </QuestionContext.Provider>
  );
};
