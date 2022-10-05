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
  const { quiz, answerQuestion, setQuizWalk, steps, location } = useQuiz();

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={{ margin: 10 }}>
        <BigText textStyles={{ color: coltheme.pink }}>
          {quiz.activeQuiz.title}
        </BigText>
      </View>
      <View style={{ marginTop: 5, marginBottom: 35 }}>
        <BigText textStyles={{ color: coltheme.pink }}>Frågor</BigText>
      </View>
      <View style={{ margin: 10 }}>
        <SmallText>
          Frågor besvarade {quiz.answers.length} /{' '}
          {quiz.activeQuiz.questions.length}
        </SmallText>
      </View>
      <View style={{ margin: 10 }}>
        <MediumText>Steg {steps}</MediumText>
      </View>
      <View style={{ margin: 20 }}>
        {quiz.activeQuiz.questions.map((prop) => {
          if (prop.isVisited) {
            // this quiz is found
            let answer = quiz.answers.find((q) => q.id == prop.id)?.answer;

            return (
              <View key={prop.id} style={{ margin: 5 }}>
                <Pressable
                  key={prop.id}
                  onPress={() => {
                    navigation.navigate('QuestionStackNavigator', {
                      screen: 'QuestionScreen',
                      params: { id: prop.id },
                    });
                  }}
                >
                  <MediumText textStyles={{ color: coltheme.cyan }}>
                    #{prop.id} /{answer} /{prop.question.slice(0, 19)}
                  </MediumText>
                </Pressable>
              </View>
            );
          } else {
            return <MediumText key={prop.id}> ?? / ? / ?????</MediumText>;
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
