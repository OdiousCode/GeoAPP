import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { RootTabsParamList } from '../App';
import RegularButton from '../components/RegularButton';
import { coltheme } from '../components/coltheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuiz } from '../context/QuizContext';
import { QuizWalk } from '../data/data';
import { TabScreenProps } from '../navigators/TabNavigator';
import { BigText, MediumText, SmallText } from '../components/TextTemplates';
import { ThemeConsumer } from 'styled-components/native';

type Props = NativeStackScreenProps<RootTabsParamList, 'Overview'>;

export default function OverviewScreen({
  navigation,
  route,
}: TabScreenProps<'OverviewScreen'>) {
  const {
    quiz,
    answerQuestion,
    setQuizWalk,
    steps,
    location,
    answers,
    unlockedQuestions,
  } = useQuiz();

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={{ margin: 10 }}>
        <BigText textStyles={{ color: coltheme.pink }}>{quiz.title}</BigText>
      </View>
      <View style={{ marginTop: 5, marginBottom: 35 }}>
        <BigText textStyles={{ color: coltheme.pink }}>Frågor</BigText>
      </View>
      <View style={{ margin: 10 }}>
        <SmallText>
          Frågor besvarade {answers.length} / {quiz.questions.length}
        </SmallText>
      </View>
      <View style={{ margin: 10 }}>
        <MediumText>Steg {steps}</MediumText>
      </View>
      <View style={{ margin: 20 }}>
        {quiz.questions.map((question) => {
          if (unlockedQuestions.includes(question.id)) {
            // this quiz is found
            let answerInNumber = answers.find(
              (q) => q.id == question.id
            )?.answer;
            let answerInText = answerInNumber
              ? question.answerAlternatives[answerInNumber]
              : 'Ej Besvarad';

            return (
              <View key={question.id} style={{ margin: 5 }}>
                <Pressable
                  key={question.id}
                  onPress={() => {
                    navigation.navigate('QuestionStackNavigator', {
                      screen: 'QuestionScreen',
                      params: { id: question.id },
                    });
                  }}
                >
                  <MediumText textStyles={{ color: coltheme.cyan }}>
                    #{question.id} / {answerInText}/
                    {question.question.slice(0, 19)}
                  </MediumText>
                </Pressable>
              </View>
            );
          } else {
            return <MediumText key={question.id}> ?? / ? / ?????</MediumText>;
          }
        })}
      </View>
      {/* Behöver Datan ifrån context här å sen mappa ut den */}
      <RegularButton
        onPress={() => {
          navigation.navigate('QuestionStackNavigator', {
            screen: 'ResultScreen',
          });
        }}
      >
        Lämna in
      </RegularButton>
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
  allQuestions: {},
});
