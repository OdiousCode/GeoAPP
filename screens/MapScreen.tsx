import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootTabsParamList } from '../App';
import { coltheme } from '../components/coltheme';
import { BigText, SmallText } from '../components/TextTemplates';
import { useQuiz } from '../context/QuizContext';
import { QuizWalk } from '../data/data';
import { TabScreenProps } from '../navigators/TabNavigator';

export default function MapScreen({
  navigation,
  route,
}: TabScreenProps<'MapScreen'>) {
  //data = XXX.fetch(route.params.quizWalkId);
  const { quiz, location, answers, unlockedQuestions } = useQuiz();

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: quiz.questions[0]?.latitude,
          longitude: quiz.questions[0]?.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          pinColor={coltheme.white}
          title={'Spelare'}
        />

        {quiz.questions.map((prop) => {
          if (answers.some((a) => a.id == prop.id)) {
            // ANSWERED MARKER
            return (
              <Marker
                key={prop.id}
                coordinate={{
                  latitude: prop.latitude,
                  longitude: prop.longitude,
                }}
                pinColor={coltheme.green}
                title={prop.title}
                description={prop.question}
              />
            );
          } else if (unlockedQuestions.some((id) => id === prop.id)) {
            // FOUND MARKER
            return (
              <Marker
                key={prop.id}
                coordinate={{
                  latitude: prop.latitude,
                  longitude: prop.longitude,
                }}
                pinColor={coltheme.orange}
                title={prop.title}
                description={prop.question}
              />
            );
          } else {
            // NOT FOUND ANSWER
            return (
              <Marker
                key={prop.id}
                coordinate={{
                  latitude: prop.latitude,
                  longitude: prop.longitude,
                }}
                pinColor={coltheme.red}
                title={'??'}
                description={'????'}
              />
            );
          }
        })}
      </MapView>

      <BigText textStyles={{ color: coltheme.cyan }}>{quiz.title}</BigText>

      <View style={styles.legendItem}>
        <MaterialIcons name="circle" size={24} color={coltheme.green} />
        <SmallText textStyles={{ margin: 10 }}>
          Besvarade frågor: {answers.length}/{quiz.questions.length}
        </SmallText>
      </View>
      <View style={styles.legendItem}>
        <MaterialIcons name="circle" size={24} color={coltheme.red} />
        <SmallText textStyles={{ margin: 10 }}>
          Upptäckta frågor: {unlockedQuestions.length}/{quiz.questions.length}
        </SmallText>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: coltheme.background,
  },
  map: {
    width: Dimensions.get('window').width,
    height: '80%',
  },
  routeTitle: {
    fontSize: 26,
  },
  legendItem: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 20,
  },
});
