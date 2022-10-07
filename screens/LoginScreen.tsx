import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { coltheme } from '../components/coltheme';
import RegularButton from '../components/RegularButton';
import { SmallText } from '../components/TextTemplates';
import { useQuiz } from '../context/QuizContext';
import { getData } from '../data/data';
import { RootScreenProps } from '../navigators/RootStackNavigator';

export default function LoginScreen({
  navigation,
  route,
}: RootScreenProps<'Login'>) {
  const { setQuizWalk } = useQuiz();
  const [text, setText] = useState(0);

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.container}>
        <View style={{ margin: 10 }}>
          <Text style={[styles.bigText]}>TipsPROmenader 2000</Text>
        </View>
        <View style={{ margin: 2 }}>
          <SmallText> Code </SmallText>
        </View>
        <View
          style={[
            styles.inputContainer,
            {
              margin: 10,
              minWidth: 100,
              height: 30,
            },
          ]}
        >
          <TextInput
            style={[styles.smallText]}
            keyboardType="numeric"
            onChangeText={(newText) => setText(+newText)}
          ></TextInput>
        </View>
        <RegularButton
          onPress={() => {
            let data = getData(text);
            if (data != undefined) {
              setQuizWalk(data);
              navigation.navigate('TabNavigator', { screen: 'HomeScreen' });
            } else Alert.alert('No quiz by that code was found.');
          }}
        >
          Gå med i Quiz
        </RegularButton>
        <Image source={require('../assets/geoappsplashv2.png')}></Image>
      </View>
    </SafeAreaView>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: coltheme.background,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flex: 1,
    bottom: 0,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inputContainer: {
    backgroundColor: coltheme.white,
    borderColor: coltheme.secondary,
    borderRadius: 4,
    borderWidth: 3,
    maxHeight: 60,
  },
  smallText: {
    fontSize: 13,
    fontWeight: 'normal',
    color: coltheme.background,
    textAlign: 'center',
  },
  bigText: { fontSize: 29, fontWeight: 'bold', color: coltheme.secondary },
});
