import React from 'react';
import { Image, Linking, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { coltheme } from '../components/coltheme';
import RegularButton from '../components/RegularButton';
import { BigText, SmallText } from '../components/TextTemplates';
import { useQuiz } from '../context/QuizContext';
import { TabScreenProps } from '../navigators/TabNavigator';

export default function HomeScreen({
  navigation,
  route,
}: TabScreenProps<'HomeScreen'>) {
  const { quiz, answers, steps } = useQuiz();
  return (
    <SafeAreaView style={[styles.container]}>
      <Image
        source={require('../assets/protipsers.png')}
        resizeMode={'cover'}
      ></Image>
      <View style={{ margin: 10 }}>
        <BigText>{quiz.title}</BigText>
      </View>
      <View style={{ margin: 10 }}>
        <SmallText>
          Du har besvarat {answers.length}/{quiz.questions.length} frågor.
        </SmallText>
      </View>
      <View style={{ margin: 10 }}>
        <SmallText>Antal steg: {steps}</SmallText>
      </View>
      <View style={styles.buttonContainer}>
        <RegularButton
          btnStyles={{ width: 100 }}
          onPress={() =>
            Linking.canOpenURL(
              'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            ).then((supported) => {
              if (supported) {
                Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
              }
            })
          }
        >
          Buy me a Coffe 🥤
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
