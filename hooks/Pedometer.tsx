import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pedometer } from 'expo-sensors';
import { useQuiz } from '../context/QuizContext';

export default function SubscribeToSteps() {
  const [PedometerAvailability, SetPedometerAvailability] = useState('');
  const [stepCount, updateStepCount] = useState(0);
  const { quiz, answerQuestion, setQuizWalk, setSteps } = useQuiz();

  useEffect(() => {
    subscribe();
  }, []);

  let subscribe = () => {
    const sub = Pedometer.watchStepCount((result) => {
      // updateStepCount(result.steps);
      setSteps(result.steps);
    });
  };
}
