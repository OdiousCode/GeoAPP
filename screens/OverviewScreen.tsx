import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { RootTabsParamList } from '../App';
import RegularButton from '../components/RegularButton';
import { coltheme } from '../components/coltheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuiz } from '../context/QuizContext';
import { getData, QuizWalk } from '../data/data';
import { TabScreenProps } from '../navigators/TabNavigator';
import { BigText, MediumText, SmallText } from '../components/TextTemplates';

type Props = NativeStackScreenProps<RootTabsParamList, 'Overview'>;

export default function OverviewScreen({
  navigation,
  route,
}: TabScreenProps<'OverviewScreen'>) {
  // let data: QuizWalk = getData(0);

  const { quiz, answerQuestion, setQuizWalk } = useQuiz();

  // let unknownQuestions = 0;
  // data.questions.forEach((x) => {
  //   if (!x.isVisited) unknownQuestions++;
  // });

  // let discoveredQuestions = 0;
  // data.questions.forEach((x) => {
  //   if (x.isVisited) discoveredQuestions++;
  // });

  // let answeredQuestions = 0;
  // data.questions.forEach((x) => {
  //   if (x.isAnswered) answeredQuestions++;
  // });

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
        <SmallText>Steg {quiz.steps}</SmallText>
      </View>

      <View>
        {quiz.activeQuiz.questions.map((prop, key) => {
          if (prop.isVisited) {
            // this quiz is found
            // {quiz.answers.find((q) => q.id == prop.id)?.answer}

            return (
              <Pressable
                onPress={() => {
                  navigation.navigate('QuestionStackNavigator', {
                    screen: 'QuestionScreen',
                    params: { id: prop.id },
                  });
                }}
              >
                <MediumText>#{prop.id} / TEMP A / Det var en...</MediumText>
              </Pressable>
            );
          } else {
            return <MediumText> ?? / ? / ?????</MediumText>;
          }
        })}
      </View>

      {/* Behöver Datan ifrån context här å sen mappa ut den */}

      <RegularButton
        onPress={() => {
          // saveTableToContext();
          // navigation.navigate('Results');
          //setQuizWalk(data);
        }}
      >
        Lämna in
      </RegularButton>
    </SafeAreaView>
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
    width: '100%',
    backgroundColor: coltheme.background,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  allQuestions: {},
});
