import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootTabsParamList } from '../App';
import RegularButton from '../components/RegularButton';
import { useQuiz } from '../context/QuizContext';
// import { Stack, Button } from '@react-native-material/core';
import { QuestionScreenProps } from '../navigators/QuestionStackNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { coltheme } from '../components/coltheme';

type Props = NativeStackScreenProps<RootTabsParamList, 'Results'>;

export default function ResultScreen({
  navigation,
  route,
}: QuestionScreenProps<'ResultScreen'>) {
  const { quiz, answerQuestion, setQuizWalk, steps } = useQuiz();

  let correctAnswers = 0;
  quiz.answers.forEach((element) => {
    let questionInRelevence = quiz.activeQuiz.questions.find(
      (q) => q.id === element.id
    );
    if (questionInRelevence) {
      if (questionInRelevence.correctAnswer === element.answer)
        correctAnswers++;
    }
  });

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Quiz: {quiz.activeQuiz.title}</Text>
        <Text style={styles.title}>Resultat</Text>
      </View>
      <View style={styles.boxContainer}>
        <Text style={styles.title}>Mina stats</Text>
        <Text style={styles.resultText}>Deltagare: #??</Text>
        <Text style={styles.resultText}>Antal steg: {steps}</Text>
        <Text style={styles.resultText}>
          Svar {quiz.answers.length} / {quiz.activeQuiz.questions.length}
        </Text>
        <Text style={styles.resultText}>
          Rätt {correctAnswers} / {quiz.activeQuiz.questions.length}
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
