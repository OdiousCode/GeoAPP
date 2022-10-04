import { MaterialIcons } from '@expo/vector-icons';
import { CompositeScreenProps } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import { Pressable } from 'react-native';
import QuestionScreen from '../screens/QuestionScreen';
import ResultScreen from '../screens/ResultsScreen';

import { TabScreenProps } from './TabNavigator';

export type HomeStackParamList = {
  QuestionScreen: { id: number };
  ResultScreen: undefined;
};

export type QuestionScreenProps<Screen extends keyof HomeStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<HomeStackParamList, Screen>,
    TabScreenProps<'OverviewScreen'>
  >;

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />
    </Stack.Navigator>
  );
}
