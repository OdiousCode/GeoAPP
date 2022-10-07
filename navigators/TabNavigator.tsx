import { MaterialIcons } from '@expo/vector-icons';
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { coltheme } from '../components/coltheme';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import OverviewScreen from '../screens/OverviewScreen';
import { QuestionStackParamList } from './QuestionStackNavigator';
import { RootStackParamList } from './RootStackNavigator';

export type TabParamList = {
  HomeScreen: undefined;
  MapScreen: undefined;
  OverviewScreen: undefined;
  QuestionStackNavigator: NavigatorScreenParams<QuestionStackParamList>;
};

export type TabScreenProps<Screen extends keyof TabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: coltheme.background,
        tabBarActiveTintColor: coltheme.white,
        tabBarInactiveTintColor: coltheme.purple,
        tabBarActiveBackgroundColor: coltheme.secondary,
        tabBarInactiveBackgroundColor: coltheme.primary,
        tabBarStyle: {
          borderTopColor: coltheme.background,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Hem',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: 'Karta',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="maps-ugc" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="OverviewScreen"
        component={OverviewScreen}
        options={{
          title: 'Lista av frågor',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="format-list-numbered"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
