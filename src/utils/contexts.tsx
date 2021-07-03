import React, { createContext, PropsWithChildren, useState } from 'react';
import { QuestionType } from '@/types';

type QuizContextType = {
  questions: QuestionType[];
  setQuestions: React.Dispatch<React.SetStateAction<QuestionType[]>>;
};

export const QuestionContext = createContext<QuizContextType | null>(null);

export const QuestionProvider = ({ children }: PropsWithChildren<{}>) => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  return (
    <QuestionContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuestionContext.Provider>
  );
};
