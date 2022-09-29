import React, { createContext, ReactNode, useContext, useState } from 'react';
import { getData, QuizWalk as QuizWalk, QuizWalkQuestion } from '../data/data';

interface QuizItem {
  activeQuiz: QuizWalk;
  answers: QuizAnswer[];
  steps: number;
}

interface QuizAnswer {
  id: number;
  answer: number;
}

interface ContextValue {
  quiz: QuizItem;
  setQuizWalk: (product: QuizWalk) => void;
  answerQuestion: (id: number, answer: number) => void;
}

interface Props {
  children: ReactNode;
}

const initalState: ContextValue = {
  quiz: {
    activeQuiz: {
      id: 0,
      questions: [
        {
          correctAnswer: 0,
          answers: [],
          id: 0,
          latitude: 0,
          longitude: 0,
          question: '',
          title: '',
        },
      ],
      title: '',
    },
    answers: [],
    steps: 0,
  },
  setQuizWalk: () => {},
  answerQuestion: () => {},
};

const QuizContext = createContext<ContextValue>(initalState);

function QuizProvider({ children }: Props) {
  const [quiz, setQuiz] = useState(initalState.quiz);

  const setQuizWalk = (activeQuiz: QuizWalk) => {
    let item: QuizItem = { activeQuiz: activeQuiz, answers: [], steps: 0 };
    setQuiz(item);
  };

  const answerQuestion = (id: number, answer: number) => {
    setQuiz((state): QuizItem => {
      const i = state.answers.findIndex((q) => q.id === id);
      if (i != -1) {
        const stateCopy = state;
        let copycopy = { ...stateCopy };
        copycopy.answers[i].answer = answer;
        const updatedQuizItem: QuizItem = {
          ...state,
          answers: copycopy.answers,
        };
        return updatedQuizItem;
      } else {
        const copycopy = state;
        let stateCopy = { ...copycopy };
        stateCopy.answers.push({ id: id, answer: answer });
        const updatedQuizItem: QuizItem = {
          ...state,
          answers: stateCopy.answers,
        };
        return updatedQuizItem;
      }
    });
  };

  return (
    <QuizContext.Provider value={{ quiz, setQuizWalk, answerQuestion }}>
      {children}
    </QuizContext.Provider>
  );
}
export const useQuiz = () => useContext(QuizContext);

export default QuizProvider;
