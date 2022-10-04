import { PanoramaSharp } from '@mui/icons-material';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootTabsParamList } from '../App';
import { useQuiz } from '../context/QuizContext';
import { QuestionScreenProps } from '../navigators/QuestionStackNavigator';

type Props = NativeStackScreenProps<RootTabsParamList, 'Question'>;

export default function QuestionScreen({
  navigation,
  route,
}: QuestionScreenProps<'QuestionScreen'>) {
  const { quiz, answerQuestion, setQuizWalk } = useQuiz();
  let quest = quiz.activeQuiz.questions.find((p) => p.id === route.params.id);
  let question = quiz.activeQuiz.questions[route.params.id];
  if (!quest) {
    return (
      <View style={styles.container}>
        <Text>There is no question with that ID</Text>
        <Button title="Gå tillbaka" onPress={() => navigation.goBack()} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>
          {quest?.id}
          {quest?.title}
        </Text>
        <Button title="Gå tillbaka" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
