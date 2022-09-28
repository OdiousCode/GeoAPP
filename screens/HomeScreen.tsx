import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { RootTabsParamList } from '../App';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getData, QuizWalk } from '../data/data';
type Props = NativeStackScreenProps<RootTabsParamList, 'Home'>;

export default function HomeScreen({ navigation, route }: Props) {
  let data: QuizWalk = getData(0);
  return (
    <SafeAreaView style={[styles.container]}>
      <Image
        source={require('../assets/protipsers.png')}
        resizeMode={'cover'}
      ></Image>
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 29, fontWeight: 'bold' }}>{data.title}</Text>
      </View>
      <View style={{ margin: 10 }}>
        <Text>Du har besvarat 7/10 frågor.</Text>
      </View>
      <View style={{ margin: 10 }}>
        <Text>Antal steg: 4481</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          color={'#0c3663'}
          title="Lämna in"
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#adadad',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    flex: 1,
    bottom: 0,
    marginBottom: 10,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
