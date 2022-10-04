import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { RootTabsParamList } from '../App';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getData, QuizWalk } from '../data/data';
import { BigText, SmallText } from '../components/TextTemplates';
import { coltheme } from '../components/coltheme';
import RegularButton from '../components/RegularButton';
import { TabScreenProps } from '../navigators/TabNavigator';

type Props = NativeStackScreenProps<RootTabsParamList, 'Home'>;

export default function HomeScreen({
  navigation,
  route,
}: TabScreenProps<'HomeScreen'>) {
  let data: QuizWalk = getData(0);
  return (
    <SafeAreaView style={[styles.container]}>
      <Image
        source={require('../assets/protipsers.png')}
        resizeMode={'cover'}
      ></Image>
      <View style={{ margin: 10 }}>
        <BigText textStyles={{ color: coltheme.pink }}>{data.title}</BigText>
      </View>
      <View style={{ margin: 10 }}>
        <SmallText>Du har besvarat 7/10 frågor.</SmallText>
      </View>
      <View style={{ margin: 10 }}>
        <SmallText>Antal steg: 4481</SmallText>
      </View>
      <View style={styles.buttonContainer}>
        <RegularButton
          btnStyles={{ width: 100 }}
          onPress={() =>
            navigation.navigate('QuestionStackNavigator', {
              screen: 'ResultScreen',
            })
          }
        >
          Lämna in
        </RegularButton>
        <RegularButton
          btnStyles={{ width: 100 }}
          onPress={() =>
            navigation.navigate('QuestionStackNavigator', {
              screen: 'QuestionScreen',
            })
          }
        >
          QuestionScreen
        </RegularButton>
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
    color: coltheme.white,
  },
  bigText: { fontSize: 29, fontWeight: 'bold', color: coltheme.secondary },
});
