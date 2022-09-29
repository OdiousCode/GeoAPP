// import { MaterialIcons } from '@expo/vector-icons';
// import { CompositeScreenProps } from '@react-navigation/native';
// import {
//   createNativeStackNavigator,
//   NativeStackScreenProps,
// } from '@react-navigation/native-stack';
// import React from 'react';
// import { Pressable } from 'react-native';
// import LoginScreen from '../screens/LoginScreen';

// import { TabScreenProps } from './TabNavigator';

// export type HomeStackParamList = {
//   Login: undefined;
// };

// export type HomeScreenProps<Screen extends keyof HomeStackParamList> =
//   CompositeScreenProps<
//     NativeStackScreenProps<HomeStackParamList, Screen>,
//     TabScreenProps<'HomeTab'>
//   >;

// const Stack = createNativeStackNavigator<HomeStackParamList>();

// export default function HomeStackNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Login" component={LoginScreen} />
//     </Stack.Navigator>
//   );
// }
