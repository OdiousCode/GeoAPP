import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootTabsParamList } from '../App';
import { useQuiz } from '../context/QuizContext';
import { getData, QuizWalk } from '../data/data';
import { TabScreenProps } from '../navigators/TabNavigator';

type Props = NativeStackScreenProps<RootTabsParamList, 'Overview'>;

export default function OverviewScreen({
  navigation,
  route,
}: TabScreenProps<'OverviewScreen'>) {
  let data: QuizWalk = getData(0);

  const { quiz, answerQuestion, setQuizWalk } = useQuiz();

  return (
    <View style={styles.container}>
      <Text> Quiz # {data.title}</Text>
      <Text> Frågor </Text>

      <Text>
        Frågor besvarade {quiz.answers.length} / {data.questions.length}
      </Text>

      {/* Behöver Datan ifrån context här å sen mappa ut den */}

      <Button
        title="Lämna in"
        onPress={() => {
          // saveTableToContext();
          // navigation.navigate('Results');
          //setQuizWalk(data);
          answerQuestion(1, 1);
          console.log(quiz.answers);
          console.log(quiz.activeQuiz.questions[1].correctAnswer);
        }}
      />
    </View>
  );
}

function saveTableToContext() {
  let data: QuizWalk = getData(0);
  // const { quiz, answerQuestion, setQuizWalk } = useQuiz();

  // console.log('save Data');
  // setQuizWalk(data);
  // answerQuestion(1, 2);
  // console.log(quiz);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
