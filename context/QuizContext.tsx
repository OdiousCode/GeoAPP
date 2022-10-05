import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { QuizWalk } from '../data/data';
import useLocation, { calcDistanceFromLongLat } from '../hooks/LocationSub';
import useSubscribeToSteps from '../hooks/Pedometer';
import * as Location from 'expo-location';
import { LocationObjectCoords } from 'expo-location';
import { schedulePushNotification } from '../helper/functions/Notification';
import { minDistanceToTrigger } from '../helper/constants/appSettings';

interface QuizItem {
  activeQuiz: QuizWalk;
  answers: QuizAnswer[];
}

interface QuizAnswer {
  id: number;
  answer: number;
}

interface ContextValue {
  quiz: QuizItem;
  setQuizWalk: (product: QuizWalk) => void;
  answerQuestion: (id: number, answer: number) => void;
  steps: number;
  location: Location.LocationObject;
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
          isVisited: false,
          isAnswered: false,
        },
      ],
      title: '',
    },
    answers: [],
  },
  setQuizWalk: () => {},
  answerQuestion: () => {},
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
  // Hook för location - Alternativt hela use effecten
  const steps = useSubscribeToSteps();
  const location = useLocation();
  // const [quiz, setQuiz] = useUpdatedQuiz(location, initalState.quiz);

  // UseEffect Location ->
  useEffect(() => {
    console.log('Use effect ran');
    if (quiz.activeQuiz.id != 0) {
      console.log('valid Quiz Id');
      for (let i = 0; i < quiz.activeQuiz.questions.length; i++) {
        // check every question to see if standing on it
        const lat1 = location.coords.latitude;
        const long1 = location.coords.longitude;

        const lat2 = quiz.activeQuiz.questions[i].latitude;
        const long2 = quiz.activeQuiz.questions[i].longitude;

        console.log(
          'Distance = ' + calcDistanceFromLongLat(lat1, long1, lat2, long2, 'K')
        );

        if (
          calcDistanceFromLongLat(lat1, long1, lat2, long2, 'K') <=
          minDistanceToTrigger
        ) {
          //quiz.activeQuiz.questions[i].isVisited == true; //TODO make function (( mby use setquiz(...state, question[i].isvisited: true)))

          console.log('trigger');
          //TODO be om hjälp
          schedulePushNotification('TipsPro!', 'Du har hittat en ny punkt!');
          setQuiz((state) => {
            const stateCopy = state;
            let copycopy = { ...stateCopy };
            copycopy.activeQuiz.questions[i].isVisited = true;
            const updatedQuizItem: QuizItem = {
              ...state,
            };
            return updatedQuizItem;
          });
        }
      }
    }
  }, [location]);

  const setQuizWalk = (activeQuiz: QuizWalk) => {
    let item: QuizItem = { activeQuiz: activeQuiz, answers: [] };
    setQuiz(item);
    //TODO, potential reset step somewhere?
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
    <QuizContext.Provider
      value={{ quiz, setQuizWalk, answerQuestion, steps, location }}
    >
      {children}
    </QuizContext.Provider>
  );
}
export const useQuiz = () => useContext(QuizContext);

export default QuizProvider;
