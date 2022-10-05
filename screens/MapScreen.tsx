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
  const { quiz, answerQuestion, setQuizWalk, steps, location } = useQuiz();
  let data: QuizWalk = quiz.activeQuiz;

  // let avgLat: number = 0;
  // let avgLong: number = 0;

  // data.questions.forEach((q) => {
  //   avgLat += q.latitude;
  //   avgLong += q.longitude;
  // });

  // avgLat /= data.questions.length;
  // avgLong /= data.questions.length;

  const totalQuestions = data.questions.length;

  let unknownQuestions = 0;
  data.questions.forEach((x) => {
    if (!x.isVisited) unknownQuestions++;
  });

  let discoveredQuestions = 0;
  data.questions.forEach((x) => {
    if (x.isVisited) discoveredQuestions++;
  });

  let answeredQuestions = 0;
  data.questions.forEach((x) => {
    if (x.isAnswered) answeredQuestions++;
  });

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: data.questions[0]?.latitude,
          longitude: data.questions[0]?.longitude,
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

        {data.questions.map((prop) => {
          if (prop.isAnswered) {
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
          } else if (prop.isVisited && !prop.isAnswered) {
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
          } else if (!prop.isVisited) {
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

      {/* <Marker
          coordinate={{
            latitude: data.questions[0].latitude,
            longitude: data.questions[0].longitude,
          }}
          pinColor={coltheme.green}
          title={data.questions[0].title}
          description={data.questions[0].question}
        /> */}
      {/* <Marker
          coordinate={{
            latitude: data.questions[1].latitude,
            longitude: data.questions[1].longitude,
          }}
          pinColor={coltheme.red}
          title={data.questions[1].title}
          description={data.questions[1].question}
        /> */}
      {/* {data.questions[2].isVisited ? (
          <Marker
            coordinate={{
              latitude: data.questions[2].latitude,
              longitude: data.questions[2].longitude,
            }}
            pinColor={coltheme.red}
            title={data.questions[2].title}
            description={data.questions[2].question}
          />
        ) : (
          <Marker
            coordinate={{
              latitude: data.questions[2].latitude,
              longitude: data.questions[2].longitude,
            }}
            pinColor={coltheme.red}
            title={'?'}
          />
        )} */}
      {/* </MapView> */}

      <BigText textStyles={{ color: coltheme.cyan }}>{data.title}</BigText>

      <View style={styles.legendItem}>
        <MaterialIcons name="circle" size={24} color={coltheme.green} />
        <SmallText textStyles={{ margin: 10 }}>
          Besvarade frågor: {answeredQuestions}/{discoveredQuestions}
        </SmallText>
      </View>
      <View style={styles.legendItem}>
        <MaterialIcons name="circle" size={24} color={coltheme.red} />
        <SmallText textStyles={{ margin: 10 }}>
          Oupptäckta frågor: {totalQuestions - discoveredQuestions}/
          {totalQuestions}
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

  /* logo: {
    width: 305,
    height: 159,
      <View >
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  }, */
});
