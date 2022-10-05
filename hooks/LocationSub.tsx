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

  const [_Location, setLocation] = useState(initialState);
  // const [errorMsg, setErrorMsg] = useState('');
  // const [foregroundPermission, setForeGroundPermission] = useState({});
  // const { quiz, answerQuestion, setQuizWalk } = useQuiz();

  // useEffect(() => {
  //   let subscribe = () => {
  //     const sub = Pedometer.watchStepCount((result) => {
  //       updateStepCount(result.steps);
  //     });
  //   };
  //   subscribe();
  // }, []);

  useEffect(() => {
    (async () => {
      let foregroundSubscrition = () => {
        const sub = Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
            distanceInterval: 1, //TODO mby alter
          },
          (location) => {
            setLocation(location);
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
  return _Location; // alternativt quiz
}

// OLD

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         // setErrorMsg('Permission to access location was denied');
//         return;
//       }

//       let foregroundSubscrition = Location.watchPositionAsync(
//         {
//           // Tracking options
//           accuracy: Location.Accuracy.High,
//           distanceInterval: 10,
//         },
//         (location) => {
//           setLocation(location);
//           console.log('Loc 1:' + location);
//         }
//       );
//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//       console.log('Loc 2:' + location);
//       // let location = await Location.getCurrentPositionAsync({});
//       // setLocation(location);
//       // console.log(location);
//     })();
//     return () => {
//       /*cleanup*/
//     };
//   }, []);
//   return _Location; // alternativt quiz
// }

/*
          console.log(location);

          //Template ID is 0
          if (quiz.activeQuiz.id != 0) {
            console.log('valid Quiz Id');
            for (let i = 0; i < quiz.activeQuiz.questions.length; i++) {
              // check every question to see if standing on it
              const lat1 = location.coords.latitude;
              const long1 = location.coords.longitude;

              const lat2 = quiz.activeQuiz.questions[i].latitude;
              const long2 = quiz.activeQuiz.questions[i].longitude;

              if (
                calcDistanceFromLongLat(lat1, long1, lat2, long2, 'K') <=
                minDistanceToTrigger
              ) {
                quiz.activeQuiz.questions[i].isVisited == true;
                schedulePushNotification(
                  'TipsPro!',
                  'Du har hittat en ny punkt!'
                );

                console.log('trigger');
              }
            }
          } else {
            console.log('no valid quiz id');
          }
*/

export function calcDistanceFromLongLat(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
  unit: string
) {
  if (lat1 == lat2 && lon1 == lon2) {
    return 0;
  } else {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == 'K') {
      dist = dist * 1.609344;
    }
    if (unit == 'N') {
      dist = dist * 0.8684;
    }
    return dist;
  }
}
