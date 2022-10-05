import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootTabsParamList } from '../App';
import { coltheme } from '../components/coltheme';
import RegularButton from '../components/RegularButton';
import { BigText, MediumText, SmallText } from '../components/TextTemplates';
import { useQuiz } from '../context/QuizContext';
import { TabScreenProps } from '../navigators/TabNavigator';

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
      <ScrollView style={styles.allQuestions}>
        {quiz.questions.map((question) => {
          if (unlockedQuestions.includes(question.id)) {
            // this quiz is found
            let answerInNumber = answers.find(
              (q) => q.id == question.id
            )?.answer;

            let answerInText = 'Ej Besvarad';
            if (answerInNumber != undefined) {
              answerInText = question.answerAlternatives[answerInNumber];
            }

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
                  <MediumText
                    textStyles={{ color: coltheme.cyan, textAlign: 'center' }}
                  >
                    #{question.id} / {answerInText} /{' '}
                    {question.title?.slice(0, 19)}
                  </MediumText>
                </Pressable>
              </View>
            );
          } else {
            return (
              <MediumText
                key={question.id}
                textStyles={{ textAlign: 'center' }}
              >
                {' '}
                ?? / ? / ?????
              </MediumText>
            );
          }
        })}
      </ScrollView>
      {/* Behöver Datan ifrån context här å sen mappa ut den */}
      <RegularButton
        onPress={() => {
          Alert.alert('Lämna in', 'Är du säker på att du vill lämna in?', [
            { text: 'Avbryt', style: 'cancel' },
            {
              text: 'Lämna in',
              style: 'default',
              onPress: () => {
                navigation.navigate('QuestionStackNavigator', {
                  screen: 'ResultScreen',
                });
              },
            },
          ]);
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
    justifyContent: 'center',
  },
  allQuestions: {
    marginVertical: 40,
    width: '100%',
    flex: 1,
  },
});
