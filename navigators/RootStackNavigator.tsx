import { Login } from '@mui/icons-material';
import { NavigatorScreenParams } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import QuestionStackNavigator, {
  QuestionStackParamList,
} from './QuestionStackNavigator';
import TabNavigator, { TabParamList } from './TabNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Login: undefined;
  TabNavigator: NavigatorScreenParams<TabParamList>;
  QuestionStackNavigator: NavigatorScreenParams<QuestionStackParamList>;
};

export type RootScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen
        name="QuestionStackNavigator"
        component={QuestionStackNavigator}
      />
    </Stack.Navigator>
  );
}
