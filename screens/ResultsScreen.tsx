import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootTabsParamList } from '../App';

type Props = NativeStackScreenProps<RootTabsParamList, 'Results'>;

export default function ResultScreen({ navigation, route }: Props) {
  return (
    <View style={styles.container}>
      <Text>Result </Text>
      <Button title="Gå tillbaka" onPress={() => navigation.goBack()} />
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
