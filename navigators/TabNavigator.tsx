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
import OverviewScreen from '../screens/OverviewScreen';
import MapScreen from '../screens/MapScreen';
import HomeScreen from '../screens/HomeScreen';
// import HomeStackNavigator, { HomeStackParamList } from './HomeStackNavigator';
import { RootStackParamList } from './RootStackNavigator';
import HomeStackNavigator, {
  HomeStackParamList,
} from './QuestionStackNavigator';

export type TabParamList = {
  HomeScreen: undefined;
  MapScreen: undefined;
  OverviewScreen: undefined;
  QuestionStackNavigator: NavigatorScreenParams<HomeStackParamList>;
  // TabNavigator: NavigatorScreenParams<TabParamList>;
};
// export type TabParamList = {
//   HomeTab: NavigatorScreenParams<HomeStackParamList>;
//   ProfileTab: undefined;
// };

/** Use this to easily define screen props */
export type TabScreenProps<Screen extends keyof TabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="OverviewScreen"
        component={OverviewScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="QuestionStackNavigator"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarStyle: { display: 'none' },
        }}
      />
    </Tab.Navigator>
  );
}
