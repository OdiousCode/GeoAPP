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
import { RootStackParamList } from './RootStackNavigator';
import { TabScreenProps } from './TabNavigator';

export type QuestionStackParamList = {
  QuestionScreen: { id: number };
  ResultScreen: undefined;
};

export type QuestionScreenProps<Screen extends keyof QuestionStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<QuestionStackParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

const Stack = createNativeStackNavigator<QuestionStackParamList>();

export default function QuestionStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />
    </Stack.Navigator>
  );
}
