import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import MapScreen from "./screens/MapScreen";
import LoginScreen from "./screens/LoginScreen";
import QuestionScreen from "./screens/QuestionScreen";
import ResultsScreen from "./screens/ResultsScreen";
import OverviewScreen from "./screens/OverviewScreen";

export type RootStackParamList = {
  Login: undefined;
  Map: { quizWalkId: number; path?: string };
  Question: { quizWalkId: number; questionId: number; path?: string };
  Results: { quizWalkId: number; path?: string };
  Overview: { quizWalkId: number; path?: string };
};

const NativeStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <NativeStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: "grey",
          },
          headerTintColor: "white",
          animation: "slide_from_right",
          animationDuration: 1500,
          // headerRight: () => <Text>Test</Text>,
        }}
      >
        <NativeStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        <NativeStack.Screen
          name="Map"
          component={MapScreen}
          options={({ route }) => ({
            title: "Map " + route.params.quizWalkId,
          })}
        />
        <NativeStack.Screen
          name="Question"
          component={QuestionScreen}
          options={({ route }) => ({
            title:
              "Question " +
              route.params.questionId +
              " - " +
              route.params.quizWalkId,
          })}
        />
        <NativeStack.Screen
          name="Results"
          component={ResultsScreen}
          options={({ route }) => ({
            title: "Results " + route.params.quizWalkId,
          })}
        />
        <NativeStack.Screen
          name="Overview"
          component={OverviewScreen}
          options={({ route }) => ({
            title: "Overview " + route.params.quizWalkId,
          })}
        />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}
