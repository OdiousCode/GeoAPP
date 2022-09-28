import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'
import { RootStackParamList } from '../App'

type Props = NativeStackScreenProps<RootStackParamList, 'Map'>

export default function MapScreen({ navigation, route }: Props) {
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

      <Button title="Gå tillbaka" onPress={() => navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '60%',
    marginBottom: 20,
  },

  logo: {
    width: 305,
    height: 159,
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
  },
})
