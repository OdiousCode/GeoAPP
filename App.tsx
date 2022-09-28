import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import MapScreen from './screens/MapScreen';
import LoginScreen from './screens/LoginScreen';
import QuestionScreen from './screens/QuestionScreen';
import ResultsScreen from './screens/ResultsScreen';
import OverviewScreen from './screens/OverviewScreen';
import HomeScreen from './screens/HomeScreen';

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
};

// const NativeStack = createNativeStackNavigator<RootStackParamList>();
const RootTabs = createBottomTabNavigator<RootTabsParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        {/* <NativeStack.Navigator> */}
        <RootTabs.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
            headerTintColor: 'white',
          }}
        >
          <RootTabs.Screen
            name="Login"
            component={LoginScreen}
            options={{
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons name="home" size={size} color={color} />
              ),
              // tabBarStyle: { display: 'none' },
            }}
          />

          <RootTabs.Screen
            name="Map"
            component={MapScreen}
            options={{
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons name="home" size={size} color={color} />
              ),
            }}
          />
          <RootTabs.Screen
            name="Question"
            component={QuestionScreen}
            options={{
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons name="home" size={size} color={color} />
              ),
            }}
          />
          <RootTabs.Screen
            name="Results"
            component={ResultsScreen}
            options={{
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons name="home" size={size} color={color} />
              ),
            }}
          />
          <RootTabs.Screen
            name="Overview"
            component={OverviewScreen}
            options={{
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons name="home" size={size} color={color} />
              ),
            }}
          />
          <RootTabs.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons name="home" size={size} color={color} />
              ),
            }}
          />
        </RootTabs.Navigator>
        {/* </NativeStack.Navigator> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
