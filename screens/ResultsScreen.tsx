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
    <View style={styles.container}>
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
  boxContainer: {
    width: '90%',
    padding: 10,
    paddingHorizontal: 30,
    margin: 30,
    flex: 3,
    backgroundColor: '#ddd',
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
    color: '#121212',
    fontSize: 20,
    textAlign: 'center',
  },
  resultText: {
    color: '#121212',
    fontSize: 20,
  },
  backBtn: {
    backgroundColor: '#ddd',
    width: '40%',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
