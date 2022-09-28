import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { RootTabsParamList } from '../App';
import { getData, QuizWalk } from '../data/data';

type Props = NativeStackScreenProps<RootTabsParamList, 'Map'>;

export default function MapScreen({ navigation, route }: Props) {
  //data = XXX.fetch(route.params.quizWalkId);
  let data: QuizWalk = getData(0);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 57.721111,
          longitude: 12.940278,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Text style={styles.routeTitle}>{data.title}</Text>

      <View style={styles.legendItem}>
        <MaterialIcons name="circle" size={24} color="green" />
        <Text>Besvarade frågor: ?/?</Text>
      </View>
      <View style={styles.legendItem}>
        <MaterialIcons name="circle" size={24} color="red" />
        <Text>Oupptäckta frågor: ?/?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  map: {
    width: Dimensions.get('window').width,
    height: '80%',
  },
  routeTitle: {
    fontSize: 26,
    textAlign: 'left',
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
