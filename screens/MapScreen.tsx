import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { coltheme } from '../components/coltheme';
import { BigText, SmallText } from '../components/TextTemplates';
import { useQuiz } from '../context/QuizContext';
import { TabScreenProps } from '../navigators/TabNavigator';

export default function MapScreen({
  navigation,
  route,
}: TabScreenProps<'MapScreen'>) {
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
          pinColor={'#000000'}
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
                image={require('../assets/AnsweredQuestion.png')}
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
                image={require('../assets/uAnsweredQuestion.png')}
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
                image={require('../assets/notFoundQuestion.png')}
                title={'??'}
                description={'????'}
              />
            );
          }
        })}
      </MapView>

      <BigText textStyles={{ color: coltheme.cyan }}>{quiz.title}</BigText>

      <View style={styles.legendItem}>
        <Image
          style={{ width: 20, height: 20 }}
          source={require('../assets/AnsweredQuestion.png')}
        />
        <SmallText textStyles={{ margin: 5 }}>
          Besvarade frågor: {answers.length}
        </SmallText>
      </View>
      <View style={styles.legendItem}>
        <Image
          style={{ width: 20, height: 20 }}
          source={require('../assets/notFoundQuestion.png')}
        />
        <SmallText textStyles={{ margin: 5 }}>
          Ej upptäckta frågor:{' '}
          {quiz.questions.length - unlockedQuestions.length}
        </SmallText>
      </View>
      <View style={styles.legendItem}>
        <Image
          style={{ width: 20, height: 20 }}
          source={require('../assets/uAnsweredQuestion.png')}
        />
        <SmallText textStyles={{ margin: 5 }}>
          Obesvarade frågor: {unlockedQuestions.length - answers.length}
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
