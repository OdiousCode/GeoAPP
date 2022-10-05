import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { RootTabsParamList } from '../App';
import { coltheme } from '../components/coltheme';
import RadioButton from '../components/radioButton';
import { BigText, SmallText } from '../components/TextTemplates';
import { useQuiz } from '../context/QuizContext';
import { QuestionScreenProps } from '../navigators/QuestionStackNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootTabsParamList, 'Question'>;

export default function QuestionScreen({
  navigation,
  route,
}: QuestionScreenProps<'QuestionScreen'>) {
  const { quiz, answerQuestion, answers } = useQuiz();

  let question = quiz.questions.find((p) => p.id === route.params.id);
  let answer = answers.find((a) => a.id === route.params.id);

  if (!question) {
    return (
      <SafeAreaView style={styles.screen}>
        <SmallText>There is no question with that ID</SmallText>
        <Button title="Gå tillbaka" onPress={() => navigation.goBack()} />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.screen}>
      <BigText>
        {question.id}. {question.title}
      </BigText>
      <SmallText textStyles={{ fontSize: 20 }}>{question?.question}</SmallText>
      <View>
        {question.answerAlternatives.map((prop, questionChoices) => {
          return answer?.answer === questionChoices ? (
            <RadioButton
              isSelected={true}
              onPress={() => {
                navigation.goBack();
              }}
              label={prop}
              value={questionChoices.toString()}
              key={questionChoices}
            />
          ) : (
            <RadioButton
              isSelected={false}
              onPress={() => {
                answerQuestion(question!.id, questionChoices);
                navigation.goBack();
              }}
              label={prop}
              value={questionChoices.toString()}
              key={questionChoices}
            />
          );
        })}

        {/* <RadioButton isSelected={true} onPress={() => selectedAnswer = key.toString()} label={prop} value={key} /> */}
      </View>
      <Button title="Gå tillbaka" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: coltheme.background,
  },
});
