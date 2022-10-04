import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pedometer } from 'expo-sensors';
import { useQuiz } from '../context/QuizContext';

export default function useSubscribeToSteps() {
  const [PedometerAvailability, SetPedometerAvailability] = useState('');
  const [stepCount, updateStepCount] = useState(0);
  // const { quiz, answerQuestion, setQuizWalk, setSteps } = useQuiz();

  useEffect(() => {
    let subscribe = () => {
      const sub = Pedometer.watchStepCount((result) => {
        // updateStepCount(result.steps);
        updateStepCount(result.steps);
      });
    };
    subscribe();
  }, []);

  return stepCount;
}
