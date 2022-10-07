import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { coltheme } from './components/coltheme';
import QuizProvider from './context/QuizContext';
import Navigation from './navigators';

export type RootTabsParamList = {
  Login: undefined;
  Map: undefined;
  Question: undefined;
  Results: undefined;
  Overview: undefined;
  Home: undefined;
};

export default function App() {
  return (
    <SafeAreaProvider style={{ backgroundColor: coltheme.background }}>
      <QuizProvider>
        <StatusBar style="light"></StatusBar>
        <Navigation></Navigation>
      </QuizProvider>
    </SafeAreaProvider>
  );
}
