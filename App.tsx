import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import QuizProvider from './context/QuizContext';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MapScreen from './screens/MapScreen';
import OverviewScreen from './screens/OverviewScreen';
import QuestionScreen from './screens/QuestionScreen';
import ResultsScreen from './screens/ResultsScreen';

import { coltheme } from './components/coltheme';
import Navigation from './navigators';
// export type RootStackParamList = {
//   Login: undefined;
//   Map: { quizWalkId: number; path?: string };
//   Question: { quizWalkId: number; questionId: number; path?: string };
//   Results: { quizWalkId: number; path?: string };
//   Overview: { quizWalkId: number; path?: string };
// };

export type RootTabsParamList = {
  Login: undefined;
  // Map: { quizWalkId: number;  };
  // Question: { quizWalkId: number; questionId: number;  };
  // Results: { quizWalkId: number;  };
  // Overview: { quizWalkId: number;};
  Map: undefined;
  Question: undefined;
  Results: undefined;
  Overview: undefined;
  Home: undefined;
};

// const NativeStack = createNativeStackNavigator<RootStackParamList>();
const RootTabs = createBottomTabNavigator<RootTabsParamList>();

export default function App() {
  const color = coltheme.secondary;

  return (
    <SafeAreaProvider style={{ backgroundColor: coltheme.background }}>
      <QuizProvider>

        <StatusBar style="auto"></StatusBar>
        <Navigation></Navigation>

      </QuizProvider>
    </SafeAreaProvider>
  );
}
//   return (
//     <SafeAreaProvider style={{ backgroundColor: coltheme.background }}>
//       <QuizProvider>
//         <NavigationContainer>
//           <StatusBar style="light" />
//           {/* <NativeStack.Navigator> */}
//           <RootTabs.Navigator
//             initialRouteName="Login"
//             screenOptions={{
//               headerShown: false,
//               headerTintColor: coltheme.background,
//               tabBarActiveTintColor: coltheme.purple,
//               tabBarInactiveTintColor: coltheme.secondary,
//               tabBarInactiveBackgroundColor: coltheme.primary,
//               tabBarActiveBackgroundColor: coltheme.secondary,
//             }}
//           >
//             <RootTabs.Screen
//               name="Login"
//               component={LoginScreen}
//               options={{
//                 tabBarIcon: ({ size, color }) => (
//                   <MaterialIcons name="home" size={size} color={color} />
//                 ),
//                 // tabBarStyle: { display: 'none' },
//               }}
//             />
//             <RootTabs.Screen
//               name="Map"
//               component={MapScreen}
//               options={{
//                 tabBarIcon: ({ size, color }) => (
//                   <MaterialIcons name="home" size={size} color={color} />
//                 ),
//               }}
//             />
//             <RootTabs.Screen
//               name="Question"
//               component={QuestionScreen}
//               options={{
//                 tabBarIcon: ({ size, color }) => (
//                   <MaterialIcons name="home" size={size} color={color} />
//                 ),
//               }}
//             />
//             <RootTabs.Screen
//               name="Results"
//               component={ResultsScreen}
//               options={{
//                 tabBarIcon: ({ size, color }) => (
//                   <MaterialIcons name="home" size={size} color={color} />
//                 ),
//               }}
//             />
//             <RootTabs.Screen
//               name="Overview"
//               component={OverviewScreen}
//               options={{
//                 tabBarIcon: ({ size, color }) => (
//                   <MaterialIcons name="home" size={size} color={color} />
//                 ),
//               }}
//             />
//             <RootTabs.Screen
//               name="Home"
//               component={HomeScreen}
//               options={{
//                 tabBarIcon: ({ size, color }) => (
//                   <MaterialIcons name="home" size={size} color={color} />
//                 ),
//               }}
//             />
//           </RootTabs.Navigator>
//           {/* </NativeStack.Navigator> */}
//         </NavigationContainer>
//       </QuizProvider>
//     </SafeAreaProvider>
//   );
// }
