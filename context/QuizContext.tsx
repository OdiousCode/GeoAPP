import * as Location from 'expo-location';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { QuizWalk } from '../data/data';
import useLocation from '../hooks/LocationSub';
import useSubscribeToSteps from '../hooks/Pedometer';
import { minDistanceToTrigger } from '../utils/constants/devSettings';
import { calcDistanceFromLongLat } from '../utils/functions/calcDistanceFromLongLat';
import { schedulePushNotification } from '../utils/functions/Notification';

interface QuizAnswer {
  id: number;
  answer: number;
}

interface ContextValue {
  quiz: QuizWalk;
  answers: QuizAnswer[];
  unlockedQuestions: number[];
  setQuizWalk: (product: QuizWalk) => void;
  answerQuestion: (id: number, answer: number) => void;
  unlockQuestion: (id: number) => void;
  steps: number;
  location: Location.LocationObject;
}

interface Props {
  children: ReactNode;
}

const initalState: ContextValue = {
  quiz: {
    id: 0,
    questions: [
      {
        correctAnswer: 0,
        answerAlternatives: [],
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
  unlockedQuestions: [],
  setQuizWalk: () => {},
  answerQuestion: () => {},
  unlockQuestion: () => {},
  steps: 0,
  location: {
    coords: {
      accuracy: 0,
      altitude: 0,
      altitudeAccuracy: 0,
      heading: 0,
      latitude: 0,
      longitude: 0,
      speed: 0,
    },
    timestamp: Date.now(),
  },
};

const QuizContext = createContext<ContextValue>(initalState);

function QuizProvider({ children }: Props) {
  const [quiz, setQuiz] = useState(initalState.quiz);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [unlockedQuestions, setUnlockedQuestions] = useState<number[]>([]);

  const steps = useSubscribeToSteps();

  const location = useLocation();
  useEffect(() => {
    verifyMovement();
  }, [location]);

  const setQuizWalk = (activeQuiz: QuizWalk) => {
    setQuiz(activeQuiz);
    setAnswers([]);
    setUnlockedQuestions([]);
  };

  const answerQuestion = (id: number, answer: number) => {
    setAnswers((previousAnswers) => {
      const clone = [...previousAnswers];
      let i = previousAnswers.findIndex((a) => a.id === id);
      if (i != -1) {
        clone.splice(i, 1, { id, answer });
      } else {
        clone.push({ id, answer });
      }
      return clone;
    });
  };

  const unlockQuestion = (id: number) => {
    if (unlockedQuestions.includes(id)) {
      return;
    }
    setUnlockedQuestions([...unlockedQuestions, id]);
  };

  return (
    <QuizContext.Provider
      value={{
        quiz,
        setQuizWalk,
        answerQuestion,
        unlockQuestion,
        steps,
        location,
        answers,
        unlockedQuestions,
      }}
    >
      {children}
    </QuizContext.Provider>
  );

  function verifyMovement() {
    if (quiz.id != 0) {
      // check every question to see if standing on it
      for (let i = 0; i < quiz.questions.length; i++) {
        const question = quiz.questions[i];

        const lat1 = location.coords.latitude;
        const long1 = location.coords.longitude;

        const lat2 = question.latitude;
        const long2 = question.longitude;

        if (
          !unlockedQuestions.includes(question.id) &&
          calcDistanceFromLongLat(lat1, long1, lat2, long2, 'K') <=
            minDistanceToTrigger
        ) {
          unlockQuestion(question.id);
          schedulePushNotification(
            'TipsPro!',
            'Du har hittat en ny fr??ga!\n' + question.title
          );
          // This return will ensure that only one notification is sent at a time, and not multiple in the case that the player is close to several questions.
          // The side effect is that you have to trigger another movement to get the next question(s).
          return;
        }
      }
    }
  }
}
export const useQuiz = () => useContext(QuizContext);

export default QuizProvider;
