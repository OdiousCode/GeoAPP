import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { RootTabsParamList } from '../App';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getData, QuizWalk } from '../data/data';

import { coltheme } from '../components/coltheme';

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
        <Text style={[styles.bigText]}>{data.title}</Text>
      </View>
      <View style={{ margin: 10 }}>
        <Text style={[styles.smallText]}>Du har besvarat 7/10 frågor.</Text>
      </View>
      <View style={{ margin: 10 }}>
        <Text style={[styles.smallText]}>Antal steg: 4481</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          color={coltheme.purple}
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
    backgroundColor: coltheme.background,
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
  smallText: {
    fontSize: 13,
    fontWeight: 'normal',
    color: coltheme.primary,
  },
  bigText: { fontSize: 29, fontWeight: 'bold', color: coltheme.secondary },
});
