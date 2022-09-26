import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, StyleSheet, Text, View, Dimensions } from "react-native";
import { RootStackParamList } from "../App";
import MapView from "react-native-maps";

type Props = NativeStackScreenProps<RootStackParamList, "Map">;

export default function MapScreen({ navigation, route }: Props) {
  return (
    <View style={styles.container}>
      <Text>Map {route.params.quizWalkId}</Text>

      <MapView style={styles.map} />

      <Button title="Gå tillbaka" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: 250,
    height: 250,
  },

  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});
