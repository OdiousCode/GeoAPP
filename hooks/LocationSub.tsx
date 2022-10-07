import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { schedulePushNotification } from '../utils/functions/Notification';
import { useQuiz } from '../context/QuizContext';
import { QuizWalk } from '../data/data';

export default function useLocation() {
  const initialState: Location.LocationObject = {
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
  };

  const [location, setLocation] = useState(initialState);

  useEffect(() => {
    (async () => {
      let foregroundSubscrition = () => {
        const sub = Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
            distanceInterval: 1,
          },
          (_location) => {
            setLocation(_location);
            console.log(
              'Current player pos, Lat: ' +
                _location.coords.latitude +
                ' Long: ' +
                _location.coords.longitude
            );
          }
        );
      };

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
      foregroundSubscrition();
    })();
    return () => {
      /*cleanup*/
    };
  }, []);
  return location;
}
