import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootTabsParamList } from '../App';
import RegularButton from '../components/RegularButton';
import { useQuiz } from '../context/QuizContext';
// import { Stack, Button } from '@react-native-material/core';
import { QuestionScreenProps } from '../navigators/QuestionStackNavigator';
import { coltheme } from '../components/coltheme';

type Props = NativeStackScreenProps<RootTabsParamList, 'Results'>;

export default function ResultScreen({
  navigation,
  route,
}: QuestionScreenProps<'ResultScreen'>) {
  const { quiz, answerQuestion, setQuizWalk, steps, answers } = useQuiz();

  let correctAnswers = 0;
  answers.forEach((answer) => {
    let questionInRelevence = quiz.questions.find((q) => q.id === answer.id);
    if (questionInRelevence) {
      if (questionInRelevence.correctAnswer === answer.answer) {
        correctAnswers++;
      }
    }
  });

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Quiz: {quiz.title}</Text>
        <Text style={styles.title}>Resultat</Text>
      </View>
      <View style={styles.boxContainer}>
        <Text style={styles.title}>Mina stats</Text>
        <Text style={styles.resultText}>Deltagare: #??</Text>
        <Text style={styles.resultText}>Antal steg: {steps}</Text>
        <Text style={styles.resultText}>
          Svar {answers.length} / {quiz.questions.length}
        </Text>
        <Text style={styles.resultText}>
          Rätt {correctAnswers} / {quiz.questions.length}
        </Text>
      </View>

      {/* WE DONT HAVE DATE FOR THIS YET */}
      {/* <View style={styles.boxContainer}>
        <Text style={styles.title}>Genomsnitt</Text>
        <Text style={styles.resultText}>Deltagare: 34</Text>
        <Text style={styles.resultText}>Antal rätt: 4</Text>
        <Text style={styles.resultText}>Antal steg: 4471</Text>
      </View> */}
      <View style={styles.buttonContainer}>
        <RegularButton onPress={() => navigation.navigate('Login')}>
          EXIT
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
  boxContainer: {
    width: '90%',
    padding: 10,
    paddingHorizontal: 30,
    margin: 30,
    flex: 3,
    backgroundColor: coltheme.primary,
    justifyContent: 'space-around',
    borderRadius: 10,
  },
  headerContainer: {
    width: '90%',
    marginTop: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: coltheme.white,
    fontSize: 20,
    textAlign: 'center',
  },
  resultText: {
    color: coltheme.white,
    fontSize: 20,
  },
  backBtn: {
    backgroundColor: '#ddd',
    width: '70%',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
