import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
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
  const { quiz, answerQuestion, setQuizWalk } = useQuiz();
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
        <View style={[styles.inputContainer, { margin: 10 }]}>
          <TextInput
            style={[styles.smallText]}
            keyboardType="numeric"
            onChangeText={(newText) => setText(+newText)}
          ></TextInput>
        </View>
        <RegularButton
          onPress={() => {
            //TODO error handling

            let data = getData(text);
            if (data != undefined) {
              setQuizWalk(data);
              navigation.navigate('TabNavigator', { screen: 'HomeScreen' });
            }
          }}
        >
          Logga in
        </RegularButton>
        <Image source={require('../assets/geoappsplash.png')}></Image>
      </View>
      {/* <View style={{ margin: 2 }}>
        <Text style={[styles.smallText]}>Skapa en quiz?</Text>
      </View> */}
      {/* <View style={{ margin: 2 }}>
        <Button color={coltheme.purple} title="Skapa quiz" />
      </View> */}
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
    // backgroundColor: '#fff',
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
  },
  bigText: { fontSize: 29, fontWeight: 'bold', color: coltheme.secondary },
});
