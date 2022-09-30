import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootTabsParamList } from '../App';
import { coltheme } from '../components/coltheme';
import { BigText, SmallText } from '../components/TextTemplates';
import { getData, QuizWalk } from '../data/data';

type Props = NativeStackScreenProps<RootTabsParamList, 'Map'>;

export default function MapScreen({ navigation, route }: Props) {
  //data = XXX.fetch(route.params.quizWalkId);
  let data: QuizWalk = getData(0);

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 57.721111,
          longitude: 12.940278,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

      <BigText>{data.title}</BigText>

      <View style={styles.legendItem}>
        <MaterialIcons name="circle" size={24} color={coltheme.green} />
        <SmallText>Besvarade frågor: ?/?</SmallText>
      </View>
      <View style={styles.legendItem}>
        <MaterialIcons name="circle" size={24} color={coltheme.red} />
        <SmallText>Oupptäckta frågor: ?/?</SmallText>
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
