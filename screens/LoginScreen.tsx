import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootTabsParamList } from '../App';

type Props = NativeStackScreenProps<RootTabsParamList, 'Login'>;

export default function LoginScreen({ navigation, route }: Props) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button
        title="Gå till Map"
        onPress={() =>
          // navigation.navigate("Map", { quizWalkId: 84, path: "/" + route.name })
          navigation.navigate('Map')
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
