import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootTabsParamList } from '../App';

type Props = NativeStackScreenProps<RootTabsParamList, 'Question'>;

export default function QuestionScreen({ navigation, route }: Props) {
  return (
    <View style={styles.container}>
      <Text>Questions </Text>
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
