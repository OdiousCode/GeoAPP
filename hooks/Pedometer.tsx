import { Pedometer } from 'expo-sensors';
import { useEffect, useState } from 'react';

export default function useSubscribeToSteps() {
  const [stepCount, updateStepCount] = useState(0);

  useEffect(() => {
    let subscribe = () => {
      Pedometer.watchStepCount((result) => {
        updateStepCount(result.steps);
      });
    };
    subscribe();
  }, []);

  return stepCount;
}
